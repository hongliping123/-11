<template>
	<view class="tag-ses1 icon iconfont "
	:class="[sex == 0? ['icon-nan','tag-ses'] : ['icon-nv','tag-ses1']]"
	>
		{{age}}
	</view>
</template>

<script>
	export default {
		props:{
			sex:Number,
			age:Number
		}
	}
</script>

<style scoped>
	.tag-ses1{
		color: #FFFFFF;
		padding: 2upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		font-size: 23upx;
		line-height: 26upx;
		background-color: pink;
	}
	.tag-ses{
		background-color: #007AFF;
		color: #FFFFFF;
		padding: 2upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		font-size: 23upx;
		line-height: 26upx;
	}
</style>
