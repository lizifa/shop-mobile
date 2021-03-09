let path = require('path');
let webpack = require('webpack');
let SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
let StylePlugin = require('./style.plugin');

function resolve(dir) {
	return path.join(__dirname, '..', dir);
}

module.exports = {
	configureWebpack: {
		entry: {
			vendors: ['vue', 'vue-router', 'axios', 'vuex'],
			app: './src/main.js'
		},
		plugins: [
			new SkeletonWebpackPlugin({
				webpackConfig: {
					entry: {
						app: path.join(__dirname, './src/skeleton/index.js')
					}
				},
				router: {
					mode: 'history',
					quiet: true,
					minimize: true,
					routes: [
						{
							path: '/',
							skeletonId: 'indexSkeleton'
						},
						{
							path: '/rank',
							skeletonId: 'rankSkeleton'
						},
						{
							path: '/order',
							skeletonId: 'orderSkeleton'
						},
						{
							path: '/user',
							skeletonId: 'userSkeleton'
						},
						{
							path: '/coin',
							skeletonId: 'coinSkeleton'
						}
					]
				}
			}),
			new webpack.ProvidePlugin({
				mapActions: ['vuex', 'mapActions'],
				mapMutations: ['vuex', 'mapMutations'],
				mapGetters: ['vuex', 'mapGetters'],
				mapState: ['vuex', 'mapState']
			}),
			new StylePlugin()
		]
	},
	css: {
		extract: true,
		loaderOptions: {
			// postcss: {
			// 	plugins: [
			// 		require('postcss-px-to-viewport')({
			// 			unitToConvert: 'px',
			// 			viewportWidth: 375,
			// 			unitPrecision: 5,
			// 			propList: ['*'],
			// 			viewportUnit: 'vw',
			// 			fontViewportUnit: 'vw',
			// 			selectorBlackList: ['van'],
			// 			minPixelValue: 1,
			// 			mediaQuery: false,
			// 			replace: true,
			// 			exclude: undefined,
			// 			include: undefined,
			// 			landscape: false,
			// 			landscapeUnit: 'vw',
			// 			landscapeWidth: 568
			// 		})
			// 	]
			// },
			less: {
				// 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
				lessOptions: {
					modifyVars: {
						// 或者可以通过 less 文件覆盖（文件路径为绝对路径）
						hack: `true; @import "/src/vantUI/index.less";`
					}
				}
			}
		}
	}
};
