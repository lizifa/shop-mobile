<template>
	<div class="scroll-to-load" :class="className">
		<slot></slot>
	</div>
</template>
<script>
export default {
	props: {
		className: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			scrollDom: null
		};
	},
	methods: {
		scrollEvent(scrollDom) {
			let wholeHeight = scrollDom.scrollHeight;
			let scrollTop = scrollDom.scrollTop;
			let divHeight = scrollDom.clientHeight;
			if (scrollTop + divHeight >= wholeHeight) {
				this.$emit('loadNext');
			} else {
				this.$emit('scrollEvent', { scrollTop });
			}
		}
	},
	beforeDestroy() {
		this.scrollDom && this.scrollDom.removeEventListener('scroll', this.scrollEvent);
	},
	mounted() {
		this.$nextTick(function() {
			let scrollDom = document.querySelector('.scroll-to-load');
			if (scrollDom) {
				this.scrollDom = scrollDom;
				scrollDom.addEventListener('scroll', this.scrollEvent.bind(this, scrollDom), false);
			}
		});
	}
};
</script>

<style lang="less" scoped></style>
