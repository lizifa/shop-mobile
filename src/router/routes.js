export const routes = [
	// {
	//   path: '/',
	//   redirect: {
	//     name: 'index'
	//   }
	// },
	{
		path: '/',
		name: 'index',
		meta: {
			useFooterBar: true,
			classList: 'shouye1',
			text: '首页'
		},
		component: () => import('../pages/index/index.vue')
	},
	{
		path: '/rank',
		name: 'rank',
		meta: {
			useFooterBar: true,
			classList: 'paihangbang1',
			text: '疯抢中心'
		},
		component: () => import('../pages/rank/index.vue')
	},

	{
		path: '/coin',
		name: 'coin',
		meta: {
			useFooterBar: true,
			classList: 'jinbi1',
			text: '金豆中心'
		},
		component: () => import('../pages/coin/index.vue')
	},
	{
		path: '/order',
		name: 'order',
		meta: {
			useFooterBar: true,
			classList: 'wodedingdan2',
			text: '我的订单'
		},
		component: () => import('../pages/order/index.vue')
	},
	{
		path: '/user',
		name: 'user',
		meta: {
			useFooterBar: true,
			classList: 'gerenzhongxin2',
			text: '个人中心'
		},
		component: () => import('../pages/user/index.vue')
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			useFooterBar: false
		},
		component: () => import('../pages/login/index.vue')
	}
];
