<template>
  <Header />
  <div class="container">
    <Side />

    <div class="main-content">
      <div class="search-form">
        <p>予約情報の検索</p>
        <div class="enter">
          <input
            type="text"
            placeholder="🔍キーワード・電話番号で検索"
            v-model="keyword"
          />
        </div>
        <button @click="search">検索</button>
      </div>
      <div :class="filteredResLis">
        <button @click="toggle">
          {{ TimeAfter ? "今日以降" : "全てのデータ" }}
        </button>
        <ul>
          <li v-for="item in filteredResLis" :key="item.id">
            <p>{{ item.time }}</p>
            <p>{{ item.content }}</p>
            <p>{{ item.shop }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Side from "../components/Side.vue";

export default defineComponent({
  components: {
    Header,
    Side,
  },
  data() {
    return {
      keyword: "",
      searchResults: [] as Array<any>,
      resList: [] as Array<any>,
      TimeAfter: false,
      currentTime: new Date(),
    };
  },
  mounted() {
    this.yoyaku();
  },
  computed: {
    filteredResLis() {
      if (!this.TimeAfter) {
        const currentTime = new Date();
        return this.resList.filter((item) => {
          const itemTime = new Date(item.time);
          return itemTime > currentTime;
        });
      }
      return this.resList;
    },
  },
  methods: {
    toggle() {
      this.TimeAfter = !this.TimeAfter;
    },
    async search() {
      try {
        const filteredResults = this.resList.filter((res) => {
          return res.name.includes(this.keyword);
        });
        this.searchResults = filteredResults;
        this.resList = filteredResults; // resList を検索結果で更新
      } catch (error) {
        console.error("検索エラー:", error);
        this.searchResults = [];
      }
    },

    about(id: number) {
      this.$router.push({ name: "about", params: { id } });
    },
    async yoyaku() {
      try {
        const booking = await fetch("/yoyaku");
        const bookingData = await booking.json();
        if (!booking.ok) {
          throw new Error("Failed  data");
        }

        return (this.resList = bookingData);
      } catch (error) {
        console.error("An error:", error);
      }
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
}
.main-content {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search-form {
  width: 380px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.enter {
  padding-left: 10px;
  padding-right: 10px;
}
.enter input {
  width: 28ch;
}
.search-form button {
  color: white;
  background-color: rgb(0, 128, 255);
}
</style>
