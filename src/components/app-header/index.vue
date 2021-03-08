<template>
  <van-nav-bar
    :title="infos.title"
    :left-text="infos.leftText"
    :right-text="infos.rightText"
    :left-arrow="infos.leftArrow"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>
<script>
export default {
  name: 'HeaderComponent',
  props: {
    infos: {
      type: Object,
      default: () => {
        return {
          title: '中间标题',
          leftText: '左边返回',
          rightText: '右边按钮',
          leftArrow: false,
          border: false,
          fixed: false,
          placeholder: false,
          zIndex: 1,
          safeAreaInsetTop: false,
        };
      },
    },
  },
  methods: {
    onClickLeft() {
      this.$emit('click-left');
    },
    onClickRight() {
      this.$emit('click-right');
    },
  },
};
</script>
