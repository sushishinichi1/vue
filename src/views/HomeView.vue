<template>
  <Header />
  <div class="container">
    <Side />
    <div class="main-content">
      <div class="search-form">
        <p>顧客情報の検索</p>
        <div class="enter">
          <input
            type="text"
            placeholder="🔍キーワード・電話番号で検索"
            v-model="keyword"
          />
        </div>
        <button @click="search">検索</button>
      </div>
      <div v-for="result in searchResults" :key="result.id">
        <div @click="about(result.id)">
          <p>顧客ID: {{ result.id }}</p>
          <p>氏名: {{ result.name }}</p>
          <p>電話番号: {{ result.phoneNumber }}</p>
          <p>住所: {{ result.address }}</p>
        </div>
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
    };
  },
  methods: {
    async search() {
      try {
        const responce: any = await fetch("/users");
        const box = await responce.json();
        this.searchResults = await box.data;
        // this.searchResults = lists.filter(() => {
        //   return list.name.includes(this.keyword);
        // });
      } catch (error) {
        console.error("検索エラー:", error);
        this.searchResults = [];
      }
    },
    about(id: number) {
      this.$router.push({ name: "about", params: { id } });
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
