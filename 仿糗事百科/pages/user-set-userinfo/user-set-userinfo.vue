<template>
	<view class="body">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>头像</view>
			<view class="u-f-ajc" @tap="changeimg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>昵称</view>
			<view class="u-f-ajc">
				<view>昵称</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>性别</view>
			<view class="u-f-ajc">
				<view>男</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>生日</view>
			<view class="u-f-ajc">
				<view>1995-09-06</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>情感</view>
			<view class="u-f-ajc">
				<view>未婚</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>职业</view>
			<view class="u-f-ajc">
				<view>IT</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>家乡</view>
			<view class="u-f-ajc">
				<view>湖南衡阳</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<button class="user-set-but" type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userpic:"../../static/demo/userpic/1.jpg"
			}
		},
		methods: {
			// 修改头像
			changeimg(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				    success: function (res) {
						this.userpic = res.tempFilePaths
				    }
				});
			},
			submit(){}
		}
	}
</script>

<style>
@import "../../common/form.css";
.user-set-userinfo-list{
	padding: 20upx;
	 border-bottom: 1upx solid #F4F4F4;
}
.user-set-userinfo-list>view:first-child{
	font-size: 32upx;
	font-weight: bold;
	color: #9b9b9b;
}
.user-set-userinfo-list>view:last-child>image{
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
}
.user-set-userinfo-list>view:last-child>view:last-of-type{
	margin-left: 20upx;
	color: #9b9b9b;
}
</style>
