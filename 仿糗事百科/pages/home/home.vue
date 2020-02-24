<template>
	<view>
		<!-- 未登入 -->
		<view class="u-f-ajc">登入糗百,体验更多功能</view>
		<!-- 第三方登入 -->
		<view class="other-login u-f-ac">
			<view class="u-f-ajc u-f1"><view class="icon iconfont icon-weixin u-f-ajc"></view></view>
			<view class="u-f-ajc u-f1"><view class="icon iconfont icon-xinlangweibo u-f-ajc"></view></view>
			<view class="u-f-ajc u-f1"><view class="icon iconfont icon-QQ u-f-ajc"></view></view>
		</view>
		<!-- 账号密码登入 -->
		<view class="u-f-ajc">账号密码登入<view class="icon iconfont icon-jinru"></view></view>
		<!-- 数据 -->
		<view class="home-data u-f-ac">
			<view class="u-f1 u-f-ajc u-f-column"><view>0</view>糗事</view>
			<view class="u-f1 u-f-ajc u-f-column"><view>0</view>动态</view>
			<view class="u-f1 u-f-ajc u-f-column"><view>0</view>评论</view>
			<view class="u-f1 u-f-ajc u-f-column"><view>0</view>收藏</view>
		</view>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc">
			<image  src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home-list" >
			<view class="home-list-item u-f-ac u-f-jsb" hover-class="home-list-hover">
				<view class="u-f-ac">
					<view class="icon iconfont icon-liulan"></view>
					浏览历史
				</view>
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</view>
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
.home-list{
	padding: 20upx;
}
.home-list-hover{
	background-color: #F4F4F4;
}
.home-list-item{
	padding: 20upx;
	border-top: 1upx solid #EEEEEE;
	border-bottom: 1upx solid #EEEEEE;
}
.home-list-item>view:first-child{
	color: #333333;
}
.home-list-item>view:first-child>view{
	margin-right: 10upx;
}
.home-list-item>view:last-child{
	color: #CCCCCC;
}
.other-login{
	padding: 20upx 80upx;
}
.other-login>view>view{
	width: 100upx;
	height: 100upx;
	color: #FFFFFF;
	border-radius: 100%;
	font-size: 55upx;
}
.other-login .icon-weixin{
	background-color: #2bd19b;
}
.other-login .icon-xinlangweibo{
	background-color: #fc7729;
}
.other-login .icon-QQ{
	background-color: #2caefc;
}
.home-data{
	padding: 20upx 40upx;
}
.home-data>view{
	color: #989898;
}
.home-data>view>view{
	color: #333333;
	font-size: 32upx;
}
.home-adv{
	padding: 20upx;
}
.home-adv>image{
	border-radius: 20upx;
	width: 100%;
	height: 150upx;
}
</style>
