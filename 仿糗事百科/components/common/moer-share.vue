<template>
	<view v-if="show">
		<view class="moer-share-model animated bounceInDown fast" @tap="togle"></view>
		<view class="moer-share" >
			<view class="moer-share-title u-f-ajc">分享到</view>
			<scroll-view scroll-x class="moer-share-body u-f-ajc animated bounceInDown fast">
				<view class="moer-share-item" hover-class="moer-share-hover">
					<view class="icon iconfont icon-weixin u-f-ajc moer-share-wx"></view>
					<view>微信</view>
				</view>
				<view class="moer-share-item" hover-class="moer-share-hover">
					<view class="icon iconfont icon-weixin u-f-ajc moer-share-pyp"></view>
					<view>朋友圈</view>
				</view>
				<view class="moer-share-item" hover-class="moer-share-hover">
					<view class="icon iconfont icon-xinlangweibo u-f-ajc moer-share-wb"></view>
					<view>新浪微博</view>
				</view>
				<view class="moer-share-item" hover-class="moer-share-hover">
					<view class="icon iconfont icon-QQ u-f-ajc moer-share-QQ"></view>
					<view>QQ好友</view>
				</view>
				<view class="moer-share-item" hover-class="moer-share-hover">
					<view class="icon iconfont icon-QQ u-f-ajc moer-share-QQ"></view>
					<view>好友</view>
				</view>
			</scroll-view>
			<view class="moer-share-bottom u-f-ajc" @tap="togle">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			show:Boolean
		},
		methods:{
			togle(){
				this.$emit('togle')
			}
		}
	}
</script>

<style scoped>
	/* 分享 */
	.moer-share-model{
		background: rgba(51, 51, 51, 0.49);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
	}
	.moer-share{
		position: fixed;
		z-index: 101;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #FFFFFF;
	}
	.moer-share-hover{
		background-color: #EEEEEE;
	}
	.moer-share-title,.moer-share-bottom{
		font-size: 32upx;
		padding: 25upx;
	}
	.moer-share-body{
		display: flex;
		white-space: nowrap;
		width: 100%;
		height: 200upx;
		border-bottom: 1upx solid #EEEEEE;
		line-height: 200upx;
	}
	.moer-share-item{
		width: 25%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
	}
	.moer-share-item>view:first-of-type{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		color: #FFFFFF;
		font-size: 45upx;
	}
	.moer-share-item>view:last-of-type{
		color: #7A7A7A;
		font-size: 25upx;
	}
</style>
