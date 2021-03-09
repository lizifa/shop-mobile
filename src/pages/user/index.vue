<template>
	<div id="user">
		<div class="wrap">
			<div class="section-header">
				<div class="bg"></div>
				<div class="floatBox1">
					<div class="userinfo">
						<div class="avarar"></div>
						<div class="nickname">小书包</div>
					</div>
				</div>
				<div class="section-pay-infos">
					<van-row class="order-infos">
						<van-col span="12" class="order-infos-left">
							<span>我的订单</span>
						</van-col>
						<van-col span="12" class="order-infos-right">
							<span>全部订单</span>
						</van-col>
					</van-row>
					<van-row class="order-status">
						<van-col span="6">
							<p>待付款</p>
						</van-col>
						<van-col span="6">
							<p>待发货</p>
						</van-col>
						<van-col span="6">
							<p>待收货</p>
						</van-col>
						<van-col span="6">
							<p>售后中</p>
						</van-col>
					</van-row>
				</div>
			</div>
		</div>
		<footer-component></footer-component>
	</div>
</template>
<script>
import FooterComponent from '../../components/app-footer';

export default {
	components: {
		FooterComponent
	}
};
</script>
<style lang="less" scoped>
#user {
	background: rgba(0, 0, 0, 0.1);
	.section-header {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 2;
		.floatBox1 {
			position: relative;
			overflow: hidden;
			box-sizing: border-box;
			text-align: center;
		}
		.headerCourse {
			height: 20px;
			font-size: 36px;
			font-weight: 400;
			color: #ffffff;
			line-height: 20px;
			text-align: center;
		}
		.userinfo {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			margin-top: 16px;
		}

		.avarar {
			width: 50px;
			height: 50px;
			border: 2px solid rgba(255, 255, 255, 0.65);
			border-radius: 50%;
			overflow: hidden;
			margin-right: 14px;

			img {
				width: 100%;
			}
		}

		.nickname {
			font-size: 28px;
			font-weight: 600;
			color: #ffffff;
			line-height: 40px;
			margin-right: 20px;
			max-width: 300px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.bg {
			height: 150px;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			width: 100%;
			overflow-x: hidden;

			&:before {
				position: absolute;
				left: 50%;
				bottom: 15px;
				background: #66c9ff;
				content: '';
				display: block;
				height: 2.666667rem;
				-webkit-border-radius: 50%;
				border-radius: 50%;
				width: 104%;
				transform: translateX(-50%);
				// z-index: -2;
			}

			&:after {
				position: absolute;
				left: 0;
				top: 0;
				background: #66c9ff;
				content: '';
				display: block;
				height: 80%;
				width: 100%;
				// z-index: -2;
			}
		}
	}
	.section-pay-infos {
		width: calc(100% - 20px);
		background: #ffffff;
		box-shadow: 0px 20px 20px 0px rgba(128, 142, 150, 0.08);
		border-radius: 10px;
		position: relative;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		position: relative;
		padding: 10px;
		box-sizing: border-box;
		.order-infos {
			display: flex;
		}
	}
}
</style>
