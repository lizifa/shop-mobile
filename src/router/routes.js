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
			title: '首页'
		},
		component: () => import('../pages/index/index.vue')
	},
	{
		path: '/rank',
		name: 'rank',
		meta: {
			useFooterBar: false,
			classList: 'paihangbang1',
			title: '疯抢中心'
		},
		component: () => import('../pages/rank/index.vue')
	},

	{
		path: '/coin',
		name: 'coin',
		meta: {
			useFooterBar: false,
			classList: 'jinbi1',
			title: '金豆中心'
		},
		component: () => import('../pages/coin/index.vue')
	},
	{
		path: '/cart',
		name: 'cart',
		meta: {
			useFooterBar: true,
			title: '购物车',
			classList: 'gouwuche'
		},
		component: () => import('../pages/cart')
	},
	{
		path: '/user',
		name: 'user',
		meta: {
			useFooterBar: true,
			classList: 'gerenzhongxin2',
			title: '个人中心'
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
	},
	{
		path: '/user/addressEdit',
		name: 'addressEdit',
		meta: {
			useFooterBar: false,
			title: '地址编辑'
		},
		component: () => import('../pages/user/addressEdit.vue')
	},
	{
		path: '/user/addressList',
		name: 'addressList',
		meta: {
			useFooterBar: false,
			title: '地址列表'
		},
		component: () => import('../pages/user/addressList.vue')
	},
	{
		path: '/detail',
		name: 'detail',
		meta: {
			useFooterBar: false,
			title: '商品详情'
		},
		component: () => import('../pages/detail')
	},

	{
		path: '/user/order',
		name: 'order',
		meta: {
			useFooterBar: false,
			classList: 'wodedingdan2',
			title: '我的订单'
		},
		component: () => import('../pages/user/order.vue')
	}
];
