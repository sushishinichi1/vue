<template>
  <div class="Header">
    <div class="block">
      <div class="rogo"><img src="/src/assets/rogo.jpg" /></div>
      <div class="thema"><span>メンテナンスノート</span></div>
      <div class="right">
        <span>UPGARAGE練馬店</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Header {
  justify-content: flex-end;
  border: 1px solid black;
  height: 66px;
  width: 100%;
}
.block {
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
}
.rogo img {
  width: 65px;
  height: 65px;
  border: 1px solid black;
}
.thema {
  text-align: center;
  padding: 20px;
}
.right {
  padding: 20px;
  margin-left: auto;
  text-align: right;
  align-items: center;
}
</style>
