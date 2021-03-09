<template>
  <div class="skeleton1">
    <div class="skeleton-nav"></div>
    <div class="skeleton-swiper"></div>
    <ul class="skeleton-tabs">
      <li v-for="index in 8" class="skeleton-tabs-item" :key="index">
        <span></span>
      </li>
    </ul>
    <div class="skeleton-banner"></div>
    <div v-for="index in 6" class="skeleton-productions" :key="index"></div>
  </div>
</template>
<style lang="less">
.skeleton1 {
  position: relative;
  height: 100%;
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;
  background: #fff;
  .skeleton-nav {
    height: 45px;
    background: rgba(0, 0, 0, 0.01);
    margin-bottom: 15px;
  }
  .skeleton-swiper {
    height: 160px;
    background: rgba(0, 0, 0, 0.01);
    margin-bottom: 15px;
  }
  .skeleton-tabs {
    list-style: none;
    padding: 0;
    margin: 0 -15px;
    display: flex;
    flex-wrap: wrap;
  }
  .skeleton-tabs-item {
    width: 25%;
    height: 55px;
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 15px;
    span {
      display: inline-block;
      width: 55px;
      height: 55px;
      border-radius: 55px;
      background: rgba(0, 0, 0, 0.01);
    }
  }
  .skeleton-banner {
    height: 60px;
    background: rgba(0, 0, 0, 0.01);
    margin-bottom: 15px;
  }
  .skeleton-productions {
    height: 20px;
    margin-bottom: 15px;
    background: rgba(0, 0, 0, 0.01);
  }
}
</style>
