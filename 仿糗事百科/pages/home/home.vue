<template>
	<view>
		我的
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				console.log('跳转到设置页')
			}
		}
	}
</script>

<style>

</style>
