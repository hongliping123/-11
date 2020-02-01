<template>
	<view>
		<!-- 自定义导航栏 -->
			<uni-nav-bar  left-icon="arrowleft"  @clickLeft="back" :statusBar="true" rightText="发布" >
				<view class="u-f-ajc margin_auto">
					所有人可见
					<view class="icon iconfont icon-xialazhankai"></view>
				</view>
			</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBarv from "../../components/uni-nav-bar/uni-nav-bar.vue";
	
	export default {
		components:{
			uniNavBarv
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
