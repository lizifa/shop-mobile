<template>
	<van-tabbar v-model="curRouteIndex" :fixed="false">
		<van-tabbar-item v-for="(route, index) in tabbars" :key="index" @click="tabClick(route, index)">
			<van-icon :class="[`icon iconfont ${route.meta.classList}`]" slot="icon" :name="route.classList"></van-icon>
			<span>{{ route.meta.title }}</span>
		</van-tabbar-item>
	</van-tabbar>
</template>
<script>
import { routes } from '@/router/routes';
let tabbars = routes.filter(v => v && v.meta && v.meta.useFooterBar) || [];
export default {
	name: 'FooterComponent',
	data() {
		return {
			curRouteIndex: 1,
			tabbars
		};
	},
	methods: {
		tabClick({ name }, index) {
			this.$router.push({
				name,
				query: {
					q: Date.now()
				}
			});
		}
	},
	created() {
		let curRouteIndex = this.tabbars.findIndex(v => v.name === this.$route.name) || 0;
		this.curRouteIndex = curRouteIndex;
	}
};
</script>
<style lang="less">
.van-tabbar-item__icon {
	.icon {
		font-size: 18px;
	}
}
</style>
