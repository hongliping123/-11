<template>
	<view>
		搜索页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		// 监听原生标题导航按钮事件
		onNavigationBarButtonTap(e){
			if ( e.index == 0 ) {
				uni.navigateBack({
					delta:1
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
