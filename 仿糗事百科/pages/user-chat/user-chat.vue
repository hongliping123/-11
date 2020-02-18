<template>
	<view>
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
				console.log(data)
			}
		}
	}
</script>

<style>

</style>
