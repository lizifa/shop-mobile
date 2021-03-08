import Vue from 'vue'
import skeleton1 from './skeleton1.vue';
import skeleton2 from './skeleton2.vue';

export default new Vue({
  components: {
    skeleton1,
    skeleton2
  },
  template: `
    <div>
      <skeleton1 id="skeleton1" style="display:none"/>
      <skeleton2 id="skeleton2" style="display:none"/>
    </div>
  `
});