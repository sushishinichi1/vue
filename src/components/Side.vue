<template>
  <div class="Side">
    <div class="Sidebar" v-show="open">
      <button @click="open = !open">
        <img src="/src/assets/right.png" />
      </button>
      <div class="gazou">
        <span
          @mouseover="hover = false"
          @mouseleave="hover = true"
          class="change-color"
        >
          買取<br />査定
        </span>

        <span>入庫</span>
        <span>顧客<br />情報</span>
      </div>
    </div>

    <div class="image" v-show="!open && !showCloseButton">
      <div class="line">
        <p>買取査定</p>
        <button class="close-button" v-if="!open" @click="open = true">
          ×
        </button>
      </div>
      <div>
        <img src="/src/assets/camera.png" />
        <p>新規買取査定</p>
      </div>
      <div>
        <img src="/src/assets/pen.jpeg" />
        <p>買取契約の締結</p>
      </div>
      <div>
        <img src="/src/assets/kari.png" />
        <p>仮入庫前一覧</p>
      </div>
      <div>
        <img src="/src/assets/rack.jpeg" />
        <p>査定ランク編集</p>
      </div>
      <div class="line">
        <p>入庫</p>
      </div>
      <div>
        <img src="/src/assets/kari.png" />
        <p>入庫サブメニュー</p>
      </div>
      <div>
        <img src="/src/assets/kari.png" />
        <p>入庫サブメニュー</p>
      </div>
      <div class="line">
        <p>顧客情報</p>
      </div>
      <div>
        <img src="/src/assets/person.jpeg" />
        <p>新規顧客情報</p>
      </div>
      <div>
        <img src="/src/assets/id.jpeg" />
        <p>croooober ID検索</p>
      </div>
    </div>
    <div :class="{ container: true, hovered: !hover }">
      <div v-show="!hover" class="menuitem">
        <div v-show="!hover" class="menu-item">
          <img src="/src/assets/camera.png" />
          <p>新規買取査定</p>
        </div>
        <div v-show="!hover" class="menu-item">
          <img src="/src/assets/pen.jpeg" />
          <p>買取契約の締結</p>
        </div>
        <div v-show="!hover" class="menu-item">
          <img src="/src/assets/kari.png" />
          <p>仮入庫前一覧</p>
        </div>
        <div v-show="!hover" class="menu-item">
          <img src="/src/assets/rack.jpeg" width="20px" height="20px" />
          <p>査定ランク編集</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const hover = ref(true);
    const showCloseButton = ref(false);
    const open = ref(true);
    const id = ref<number>(0);

    return {
      hover,
      open,
      showCloseButton,
    };
  },
};
</script>

<style scoped>
.change-color:hover {
  background-color: gray;
  font-weight: bold;
}

.image img {
  width: 30px;
  height: 30px;
}
.Side {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.open p {
  margin-bottom: 10px;
}
.Sidebar {
  display: flex;
  flex-direction: column;
  bottom: 0;
  border: 1px solid black;
}
.Sidebar p {
  border-right: none;
}
.sidebar span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 80px;
  align-items: center;
  width: 65px;
  border: 1px solid black;
  border-right: none;
}
.Sidebar img {
  width: 50px;
  height: 50px;
}
.Sidebar p {
  margin-top: 0;
  margin-bottom: 0;
}

.close-button {
  font-size: 1.5rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-left: 80px;
}
.menu-item p {
  display: flex;
  white-space: nowrap;
}
.container {
  display: flex;
  justify-content: space-between;
  padding: auto;
  /* height: 210px; */
}
.container.hovered {
  border: 1px solid black;
  border-top: none;
  position: absolute;
  top: 93px;
  left: 65px;
  background-color: white;
}
.container img {
  width: 20px;
  height: 20px;
}
.menu-item {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.gazou {
  display: inline-block;
  right: 100%;
  margin: 0;
  padding: 0;
  bottom: 0;
  width: 65px;
}
.gazou span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  border-left: none;
  border-top: none;
  width: 165px;
}
.line {
  font-weight: bold;
  display: flex;
}
.image > div {
  display: flex;
  align-items: center;
}
.li .close-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
