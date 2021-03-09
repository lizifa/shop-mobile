<template>
	<div id="index">
		<header-component @click-left="onClickLeft" @click-right="onClickRight" :infos="headerData" v-if="false"></header-component>
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="fetchData" class="wrap good-list">
			<li v-for="item in list" :key="item" :title="item">
				<div>
					<div class="img-box">
						<van-image src="https://img01.yzcdn.cn/vant/cat.jpeg">
							<template v-slot:loading>
								<van-loading type="spinner" size="20" />
							</template>
						</van-image>
					</div>
					<div class="infos">
						<div class="goods-name">哈哈哈</div>
						<div class="goods-name">899金币+199元</div>
						<div class="goods-name">兑换热度</div>
					</div>
				</div>
			</li>
		</van-list>
		<footer-component></footer-component>
	</div>
</template>
<script>
import FooterComponent from '@/components/app-footer';
import HeaderComponent from '@/components/app-header';
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
			},
			list: [],
			loading: false,
			finished: false
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
			for (let i = 0; i < 20; i++) {
				this.list.push(this.list.length + 1);
			}

			// 加载状态结束
			this.loading = false;

			// 数据全部加载完成
			if (this.list.length >= 100) {
				this.finished = true;
			}
		},
		fetchData() {
			setTimeout(() => {
				this.getLists();
			}, 1000);
		}
	}
};
</script>
<style lang="less">
#index {
	.good-list {
		list-style: none;
		margin: 0;
		padding: 10px;
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
		.img-box {
			width: 100%;
			background-color: rgba(0, 0, 0, 0.1);
			position: relative;
			img{
				display: block;
				margin: 0;
			}
		}
		.infos {
			padding: 10px;
		}
	}
}
</style>
