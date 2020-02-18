<template>
	<view>
		<!-- 聊天列表 -->
		<view class="user-chat-list u-f user-chat-me">
			<!-- <image src="../../static/demo/userpic/17.jpg" mode="widthFix" lazy-load></image> -->
			<view class="user-chat-list-body">
				<!-- 文字 -->
				<!-- <text>请叫我大哥大请叫我大哥大请叫我大哥大请叫我大哥大请叫我大哥大请叫我大哥大请叫我大哥大请叫我大哥大</text> -->
				<!-- 图片 -->
				<image src="../../static/demo/1.jpg" mode="widthFix" lazy-load></image>
			</view>
			<image src="../../static/demo/userpic/17.jpg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 输入框 -->
		<user-chat-buttom @submit="submit"></user-chat-buttom>
	</view>
</template>

<script>
	import userChatButtom from '../../components/user-chat/user-chat-buttom.vue'
	export default {
		components: {
			userChatButtom
		},
		data() {
			return {
				
			}
		},
		methods: {
			submit(data){
				// 发送逻辑
				console.log(data)
			}
		}
	}
</script>

<style>
.user-chat-list{
	
}
.user-chat-list>image{
	width: 100upx;
	height: 100upx;
	border-radius: 100%;
	flex-shrink: 0;
}
.user-chat-list-body{
	position: relative;
	background-color: #F4F4F4;
	padding: 25upx;
	margin-left: 20upx;
	border-radius: 20upx;
	margin-right: 100upx;
}
.user-chat-list-body::after{
	content: '';
	width: 0;
	height: 0;
	border: 15upx solid #F4F4F4;
	border-color: transparent #F4F4F4 transparent transparent;
	position: absolute;
	left: -30upx;
	right: 0;
	top: 30upx;
}
.user-chat-me{
	justify-content: flex-end;
}
.user-chat-me .user-chat-list-body{
	margin-left: 100upx;
	margin-right: 20upx;
}
.user-chat-me .user-chat-list-body::after{
	left: auto;
	right: -30upx;
	border-color: transparent transparent transparent #F4F4F4;
}
.user-chat-list-body>image{
	max-width: 150upx;
	max-height: 200upx;
}
</style>
