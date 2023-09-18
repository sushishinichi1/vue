<template>
  <Header />
  <div class="container">
    <Side />
    <div class="screen">
      <div class="main-content">
        <div class="create">
          <div class="user">
            <div class="info">
              <p>GroooberID: <br />{{ userData.id }}</p>
              <p>{{ userData.name }}さま</p>
            </div>
            <p>🚙愛車 {{ userData.car }}</p>
            <button class="button">環境見積もり</button>
            <button class="button">新規買取査定</button>
            <button class="button">新規作業予約</button>
          </div>
        </div>

        <div>
          <div class="set">
            <ul>
              <div class="side">
                <li>トップ</li>
                <li>メッセージ</li>
                <li>検討中パーツ</li>
                <li>購入履歴</li>
                <li>査定中</li>
                <li>買取履歴</li>
                <li><router-link to="/yoyaku">作業予約</router-link></li>
                <li>作業履歴</li>
              </div>
            </ul>
          </div>
        </div>
        <div class="form">
          <input
            type="text"
            placeholder="🔍キーワードで検索"
            v-model="keyword"
          />
          <button @click="search">検索</button>
          <label>メモ付きのみ<input type="checkbox" v-model="memo" /></label>
          <div class="col">
            <li v-for="result in searchResults">
              {{ result.name }}, {{ result.price }},
              {{ result.memo }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import Side from "../components/Side.vue";

interface userData {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
  car: string;
}
interface carData {
  name: string;
  price: number;
  memo?: string;
}
export default {
  components: {
    Header,
    Side,
  },
  data() {
    return {
      userData: {} as userData,
      searchResults: [] as carData[],
      originalData: [] as carData[],
      keyword: "",
      memo: false,
    };
  },
  mounted() {
    this.fetchData();
    this.fetchCar();
  },
  computed: {
    searchResults(): carData[] {
      if (this.memo) {
        return this.searchResults.filter((car: any) => car.memo);
      } else {
        return this.searchResults;
      }
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(`/user/${this.$route.params.id}`);
        const data = await response.json();
        this.userData = data;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    async fetchCar() {
      try {
        const carData = await fetch(`/car`);
        const data = await carData.json();
        this.originalData = data.data;
        this.searchResults = data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    search() {
      if (!this.keyword) {
        this.searchResults = this.originalData;
      } else {
        this.searchResults = this.originalData.filter((item: any) => {
          return item.name.includes(this.keyword);
        });
      }
    },
  },
};
</script>

<style scoped>
html,
body {
  width: 100%;
}
.container {
  display: flex;
  width: 100%;
  align-items: flex-start;
}
.about {
  margin-right: 20px;
}

.set {
  width: 100%;
}
.side {
  display: flex;
  list-style: none;
  border: 1px solid black;
  align-items: center;
  height: 50px;
}
.side li {
  border: 1px solid black;
  width: 100px;
  height: 50px;
}
.button {
  display: flex;
}
.main-content {
  display: flex;
}
.screen {
  width: inherit;
}
.form {
  margin-left: 40px;
  list-style: none;
}
.side li:nth-child(1) {
  background-color: red;
}

.side li:nth-child(2) {
  background-color: blue;
}
.side li:nth-child(3) {
  background-color: green;
}

.side li:nth-child(4) {
  background-color: orange;
}

.side li:nth-child(5) {
  background-color: purple;
}

.side li:nth-child(6) {
  background-color: teal;
}

.side li:nth-child(7) {
  background-color: brown;
}

.side li:nth-child(8) {
  background-color: gray;
}

.info {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(154, 181, 181);
  text-align: center;
}
.user {
  width: 150px;
  height: 100px;
}
.col li {
  border: 1px solid black;
}
</style>
