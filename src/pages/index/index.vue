<template>
	<div id="index">
		<template v-if="loading">
			<div class="loading">
				<img src="../../assets/others/ball-triangle.svg" width="60" alt="" />
			</div>
		</template>
		<template v-else>
			<header-component @click-left="onClickLeft" @click-right="onClickRight" :infos="headerData" v-if="false"></header-component>
			<scroll-to-load-component className="wrap good-list" @loadNext="getLists">
				<li v-for="(item, index) in queryData.list" :key="index">
					<div>
						<van-image :src="item.imgUrl">
							<template v-slot:loading>
								<van-loading type="spinner" size="20" />
							</template>
						</van-image>
						<div class="infos">
							<div class="van-ellipsis">{{ item.goodsName }}</div>
							<div class="flex items-end">
								<div class="color_primary bold mr2">
									<span class="point">{{ item.originalPrice }}金豆</span><span class="orginal-price">+{{ item.price }}元</span>
								</div>
							</div>
							<div class="goods-info-price flex">
								<div class="sale-desc">{{ item.saleDesc }}</div>
								<div class="price">￥{{ item.originalPrice }}</div>
							</div>
						</div>
					</div>
				</li>
			</scroll-to-load-component>
			<footer-component></footer-component>
		</template>
	</div>
</template>
<script>
import FooterComponent from '@/components/app-footer';
import HeaderComponent from '@/components/app-header';
import ScrollToLoadComponent from '@/components/scroll-to-load';
import { goodsList } from '@/assets/others/goods';
import { Toast } from 'vant';
export default {
	name: 'AppHomePage',
	components: {
		FooterComponent,
		HeaderComponent,
		ScrollToLoadComponent
	},
	data() {
		return {
			headerData: {
				title: '测试',
				leftText: '返回',
				rightText: '编辑'
			},
			queryData: {
				list: [],
				page: 1
			},
			loading: true
		};
	},
	methods: {
		onClickLeft() {
			Toast('返回');
		},
		onClickRight() {
			Toast('编辑');
		},
		getLists() {
			this.loading = true;
			this.$set(this.queryData, 'list', goodsList);
			this.loading = false;
		}
	},
	mounted() {
		this.getLists();
	}
};
</script>
<style lang="less">
#index {
	.good-list {
		list-style: none;
		margin: 0;
		padding: 10px;
		padding-bottom: 50px;
		li {
			box-sizing: border-box;
			box-sizing: border-box;
			width: 50%;
			float: left;
			position: relative;
			margin-bottom: 10px;
		}
		li:nth-child(2n) > div {
			margin-left: 5px;
			height: 100%;
			overflow: hidden;
			border-radius: 5px;
			border: 1px solid rgba(0, 0, 0, 0.1);
			position: relative;
		}
		li:nth-child(2n -1) > div {
			margin-right: 5px;
			height: 100%;
			overflow: hidden;
			border-radius: 5px;
			border: 1px solid rgba(0, 0, 0, 0.1);
			position: relative;
		}
		.van-image {
			width: 100%;
			background-color: rgba(0, 0, 0, 0.1);
			position: relative;
			display: block;
			img {
				display: block;
				margin: 0;
			}
		}
		.infos {
			padding: 10px;
		}
		.van-ellipsis {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.items-end {
			-webkit-box-align: end;
			-ms-flex-align: end;
			align-items: flex-end;
		}

		.flex {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
		}
		.goods-info-price {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
		.sale-desc {
			font-size: 0.5rem;
			color: #ff3600;
		}
		.price {
			text-decoration: line-through;
			font-size: 12px;
			color: #888;
		}
		.color_primary {
			color: #e54635;
		}
		.point {
			font-size: 16px;
		}
	}
	.loading {
		background: rgba(0, 0, 0, 0.1);
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}
}
</style>
