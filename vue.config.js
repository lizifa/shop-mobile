let path = require('path');
let webpack = require('webpack');
let SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
let StylePlugin = require('./style.plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  // configureWebpack: (config) => {
  //   return {
  //     entry: {
  //       vendors: ['vue', 'vue-router', 'axios', 'vuex'],
  //       app: './src/main.js',
  //     },
  //     resolve: {
  //       alias: {
  //         '@': resolve('src'),
  //         LESS: resolve('src/less'),
  //         IMAGES: resolve('src/assets/images'),
  //         UTIL: resolve('src/util'),
  //         API: resolve('src/api'),
  //         STORE: resolve('src/store'),
  //         COMPONENTS: resolve('src/components'),
  //       },
  //     },
  //     plugins: [
  //       new SkeletonWebpackPlugin({
  //         webpackConfig: {
  //           entry: {
  //             app: path.join(__dirname, './src/skeleton/index.js'),
  //           },
  //         },
  //         router: {
  //           mode: 'history',
  //           quiet: true,
  //           minimize: true,
  //           routes: [
  //             {
  //               path: '',
  //               skeletonId: 'skeleton1',
  //             },
  //             {
  //               path: '/login',
  //               skeletonId: 'skeleton2',
  //             },
  //           ],
  //         },
  //       }),
  //       new webpack.ProvidePlugin({
  //         mapActions: ['vuex', 'mapActions'],
  //         mapMutations: ['vuex', 'mapMutations'],
  //         mapGetters: ['vuex', 'mapGetters'],
  //         mapState: ['vuex', 'mapState'],
  //       }),
  //       new StylePlugin(),
  //     ],
  //   };
  // },
  css: {
    extract: true,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: ['van'],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568,
          }),
        ],
      },
    },
  },
};
