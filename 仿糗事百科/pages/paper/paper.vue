<template>
	<view class="body">
		<!-- 小纸条列表 -->
		<block v-for="(item,index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
	</view>
</template>

<script>
	
	import paperList from "../../components/paper/paper-list.vue"
	export default {
		components:{
			paperList
		},
		data() {
			return {
				list:[
					{
						userpic:"../../static/demo/userpic/8.jpg",
						username:"一只英俊的小马",
						time:"12:34",
						data:"你在草原上奔跑嘛",
						noreadnum:"1"
					},
					{
						userpic:"../../static/demo/userpic/8.jpg",
						username:"一只英俊的小马",
						time:"12:34",
						data:"你在草原上奔跑嘛",
						noreadnum:"0"
					},
					{
						userpic:"../../static/demo/userpic/8.jpg",
						username:"一只英俊的小马",
						time:"12:34",
						data:"你在草原上奔跑嘛",
						noreadnum:"0"
					},
					{
						userpic:"../../static/demo/userpic/8.jpg",
						username:"一只英俊的小马",
						time:"12:34",
						data:"你在草原上奔跑嘛",
						noreadnum:"11"
					}
				]
			};
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.getdeta()
		},
		methods:{
			// 获取数据
			getdeta(){
				setTimeout(() => {
					// 服务器获取数据
					let arr = [
						{
							userpic:"../../static/demo/userpic/8.jpg",
							username:"锦瑟",
							time:"12:34",
							data:"你在草原上奔跑嘛",
							noreadnum:"1"
						},
						{
							userpic:"../../static/demo/userpic/8.jpg",
							username:"一只英俊的小马",
							time:"12:34",
							data:"你在草原上奔跑嘛",
							noreadnum:"1"
						},
						{
							userpic:"../../static/demo/userpic/8.jpg",
							username:"一只英俊的小马",
							time:"12:34",
							data:"你在草原上奔跑嘛",
							noreadnum:"1"
						},
					]
					// 赋值
					this.list = arr
					// 关闭下拉刷新
					uni.stopPullDownRefresh()
				}, 1000);
				
			}
		}
	}
</script>

<style>
	.body{
		padding: 0 20upx;
	}
	
</style>
