<template>
	<div id="app"><router-view class="pages"/></div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style lang="less">
@import '~@/App.less';
.pages {
	display: flex;
	flex-direction: column;
	height: 100%;
	position: fixed;
	width: 100%;
	.wrap {
		flex-grow: 1;
		overflow: hidden;
		overflow-y: scroll;
	}
}
</style>
