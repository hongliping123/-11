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
		// 监听原生导航栏搜索框内容输入事件
		onNavigationBarSearchInputChanged(e){
			console.log(e.text)
		},
		// 监听用户按下手机软键盘搜索事件
		onNavigationBarSearchInputConfirmed(e){
			console.log(e.text)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
