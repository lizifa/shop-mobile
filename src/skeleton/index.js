import Vue from 'vue';
import indexSkeleton from './components/indexSkeleton.vue';
import rankSkeleton from './components/rankSkeleton.vue';
import userSkeleton from './components/userSkeleton.vue';
import orderSkeleton from './components/orderSkeleton.vue';
import coinSkeleton from './components/coinSkeleton.vue';

export default new Vue({
	components: {
		indexSkeleton,
		rankSkeleton,
		userSkeleton,
		orderSkeleton,
		coinSkeleton
	},
	template: `
    <div>
      <indexSkeleton id="indexSkeleton" style="display:none"/>
      <rankSkeleton id="rankSkeleton" style="display:none"/>
      <userSkeleton id="userSkeleton" style="display:none"/>
      <orderSkeleton id="orderSkeleton" style="display:none"/>
      <coinSkeleton id="coinSkeleton" style="display:none"/>
    </div>
  `
});
