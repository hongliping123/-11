<template>
	<view>
		<view class="papor-left-popup-mask" v-show="show" @tap="hidepopup"></view>
		<view class="papor-left-popup" v-show="show">
			<view class="u-f-ac" hover-class="papor-left-popup-h" @tap="addfriend">
				<view class="icon iconfont icon-sousuo"></view>
				加糗友
			</view>
			<view class="u-f-ac" hover-class="papor-left-popup-h" @tap="clear">
				<view class="icon iconfont icon-qingchu"></view>
				清除缓存
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			show:Boolean
		},
		methods:{
			hidepopup(){
				this.$emit("hidepopup")
			},
			addfriend(){
				this.$emit("addfriend")
			},
			clear(){
				this.$emit("clear")
			}
		}
	}
</script>

<style scoped>
	.papor-left-popup{
		position: fixed;
		right: 0;
		top: 10upx;
		background-color: #FFFFFF;
		z-index: 2000;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
	}
	.papor-left-popup>view{
		padding: 20upx;
		font-size: 35upx;
	}
	.papor-left-popup>view>view{
		margin-right: 10upx;
		font-weight: bold;
	}
	.papor-left-popup-h{
		color: #EEEEEE;
	}
	.papor-left-popup-mask{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1999;
	}
</style>
