<template>
	<div id="index">
		<header-component @click-left="onClickLeft" @click-right="onClickRight" :infos="headerData" v-if="true">
			<template slot="left">自定义标题</template>
			<template slot="title">自定义标题</template>
			<template slot="right">自定义标题</template>
		</header-component>
		<div class="wrap">1</div>
		<footer-component></footer-component>
	</div>
</template>
<script>
import FooterComponent from '../../components/app-footer';
import HeaderComponent from '../../components/app-header';
import { Toast } from 'vant';
export default {
	name: 'AppHomePage',
	components: {
		FooterComponent,
		HeaderComponent
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
		}
	}
};
</script>