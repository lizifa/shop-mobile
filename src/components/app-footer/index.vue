<template>
  <div class="index">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">疯抢中心</van-tabbar-item>
      <van-tabbar-item icon="friends-o">金豆中心</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import {Toast} from 'vant';

export default {
  name: 'FooterComponent',
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    routeJump() {
      this.$router.push({name: 'login'});
    },
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>
