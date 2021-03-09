<template>
	<van-goods-action>
		<van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
		<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
		<van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
		<van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
	</van-goods-action>
</template>
<script>
import { Toast } from 'vant';

export default {
	methods: {
		onClickIcon() {
			Toast('点击图标');
		},
		onClickButton() {
			Toast('点击按钮');
		}
	}
};
</script>
