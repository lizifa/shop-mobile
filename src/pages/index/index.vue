<template>
	<div id="index">
		<template v-if="loading">
			<div class="loading">
				<img src="../../assets/others/ball-triangle.svg" width="60" alt="" />
			</div>
		</template>
		<template v-else>
			<!-- <van-search placeholder="请输入商品名称" v-model="keyword" /> -->
			<van-search v-model="keyword" show-action @search="onSearch">
				<div slot="action" @click="onSearch">搜索</div>
			</van-search>
			<header-component @click-left="onClickLeft" @click-right="onClickRight" :infos="headerData" v-if="false"></header-component>
			<scroll-to-load-component className="wrap good-list" @loadNext="getLists">
				<GoodsListComponent :list="queryData.list"></GoodsListComponent>
			</scroll-to-load-component>
			<footer-component></footer-component>
		</template>
	</div>
</template>
<script>
import FooterComponent from '@/components/app-footer';
import HeaderComponent from '@/components/app-header';
import ScrollToLoadComponent from '@/components/scroll-to-load';
import GoodsListComponent from '@/components/goods-list';

import { goodsList } from '@/assets/others/goods';
import { Toast } from 'vant';
export default {
	name: 'AppHomePage',
	components: {
		FooterComponent,
		HeaderComponent,
		ScrollToLoadComponent,
		GoodsListComponent
	},
	data() {
		return {
			keyword: '',
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
		onSearch() {
			Toast('搜索');
		},
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
