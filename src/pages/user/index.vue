<template>
	<div id="user">
		<div class="wrap">
			<img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png" />

			<van-row class="user-links">
				<van-col span="6">
					<van-icon name="pending-payment" />
					待付款
				</van-col>
				<van-col span="6">
					<van-icon name="records" />
					待接单
				</van-col>
				<van-col span="6">
					<van-icon name="tosend" />
					待发货
				</van-col>
				<van-col span="6">
					<van-icon name="logistics" />
					已发货
				</van-col>
			</van-row>

			<van-cell-group class="user-group">
				<van-cell icon="records" title="全部订单" is-link @click="routeJump('order', null)" />
			</van-cell-group>

			<van-cell-group>
				<van-cell icon="points" title="我的积分" is-link />
				<van-cell icon="gold-coin-o" title="我的优惠券" is-link />
				<van-cell icon="gift-o" title="我收到的礼物" is-link />
			</van-cell-group>
		</div>
		<footer-component></footer-component>
	</div>
</template>
<script>
import FooterComponent from '@/components/app-footer';

export default {
	components: {
		FooterComponent
	},
	methods: {
		routeJump(type, data) {
			this.$router.push({
				name: 'order'
			});
		}
	}
};
</script>
<style lang="less" scoped>
#user {
	.user-poster {
		width: 100%;
		height: 53vw;
		display: block;
	}
	.user-group {
		margin-bottom: 15px;
	}
	.user-links {
		padding: 15px 0;
		font-size: 12px;
		text-align: center;
		background-color: #fff;
		.van-icon {
			display: block;
			font-size: 24px;
		}
	}
}
</style>
