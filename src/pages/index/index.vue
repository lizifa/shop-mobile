<template>
	<div id="index">
		<header-component @click-left="onClickLeft" @click-right="onClickRight" :infos="headerData" v-if="true"></header-component>
		<scroll-to-load-component className="wrap" @loadNext="loadNext">
			<h1 v-for="item in 50" :key="item">{{ item }}</h1>
		</scroll-to-load-component>
		<footer-component></footer-component>
	</div>
</template>
<script>
import FooterComponent from '../../components/app-footer';
import HeaderComponent from '../../components/app-header';
import ScrollToLoadComponent from '../../components/scroll-to-load';
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
			}
		};
	},
	methods: {
		onClickLeft() {
			Toast('返回');
		},
		onClickRight() {
			Toast('编辑');
		},
		loadNext() {
			Toast('加载下一页');
		}
	}
};
</script>
