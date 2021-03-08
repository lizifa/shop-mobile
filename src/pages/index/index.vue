<template>
  <div class="index">
    <header-component
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :infos="headerData"
    ></header-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import FooterComponent from '../../components/app-footer';
import HeaderComponent from '../../components/app-header';
import {Toast} from 'vant';
export default {
  name: 'AppHomePage',
  components: {
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {
      headerData: {
        title: '测试',
        leftText: '返回',
        rightText: '编辑',
      },
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>
