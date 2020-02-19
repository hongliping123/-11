<template>
	<view>
		<!-- 聊天列表 -->
		<block v-for="(item,index) in list" :key="index">
			<user-chat-list :item="item" :index="index"></user-chat-list>
		</block>
		
		<!-- 输入框 -->
		<user-chat-buttom @submit="submit"></user-chat-buttom>
	</view>
</template>

<script>
	import userChatButtom from '../../components/user-chat/user-chat-buttom.vue'
	import time from "../../common/time.js"
	import userChatList from "../../components/user-chat/user-chat-list.vue"
	export default {
		components: {
			userChatButtom,
			userChatList
		},
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			this.getdata()
		},
		methods: {
			// 获取聊天数据
			getdata(){
				let arr = [
					{
						isme:false,
						userpic:"../../static/demo/userpic/17.jpg",
						type:"text",
						data:"哈哈哈哈",
						time:"1582021561"
					},
					{
						isme:true,
						userpic:"../../static/demo/userpic/16.jpg",
						type:"img",
						data:"../../static/demo/1.jpg",
						time:"1582021261"
					}
				]
				for (let i = 0; i < arr.length; i++) {
					arr[i].gstiem = time.gettime.getChatTime(arr[i].time,i>0?arr[i-1].time:0)
				}
				this.list = arr
			},
			submit(data){
				// 发送逻辑
				console.log(data)
			}
		}
	}
</script>

<style>

</style>
