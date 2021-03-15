<template>
	<div id="index">
		<van-search v-model="keyword" show-action @search="onSearch">
			<div slot="action" @click="onSearch">搜索</div>
		</van-search>
		<header-component @click-left="onClickLeft" @click-right="onClickRight" :infos="headerData" v-if="false"></header-component>
		<scroll-to-load-component className="wrap good-list" @loadNext="getLists">
			<keep-alive>
				<van-skeleton title="11" :row="10" :loading="loading" :animate="true" :row-width="'100%'">
				<GoodsListComponent :list="queryData.list"></GoodsListComponent>
				</van-skeleton>
			</keep-alive>
		</scroll-to-load-component>
		<footer-component></footer-component>
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
			if (this.queryData.list.length < 0) {
				this.loading = true;
			}
			this.$set(this.queryData, 'list', goodsList);
			setTimeout(() => {
				this.loading = false;
			}, 2000);
		}
	},
	mounted() {
		this.getLists();
	}
};
</script>
