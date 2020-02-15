<template>
	<view class="body">
		<!-- 小纸条列表 -->
		<view class="papoer-list u-f-ac">
			<image src="../../static/demo/userpic/8.jpg" mode="widthFix" lazy-load></image>
			<view>
				<view class="u-f-ac u-f-jsb">昵称 <view>10:12</view></view>
				<view class="u-f-ac u-f-jsb">我是信息<uni-badge  text="1" type="error" /></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import unibadgei from "../../components/uni-badge/uni-badge.vue"
	export default {
		components:{
			unibadgei
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.body{
		padding: 0 20upx;
	}
	.papoer-list{
		border-bottom: 1upx solid #EEEEEE;
		padding: 0 20upx 10upx 0;
	}
	.papoer-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	.papoer-list>view{
		flex: 1;
	}
	.papoer-list>view>view:first-child{
		font-size: 35upx;
	}
	.papoer-list>view>view:first-child>view{
		color: #CBCBCB;
	}
	.papoer-list>view>view:last-child{
		color: #999999;
	}
</style>
