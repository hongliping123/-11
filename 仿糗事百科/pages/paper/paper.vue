<template>
	<view class="body">
		<!-- 操作菜单 -->
		<papor-left-popup :show="show"
		@hidepopup="hidepopup"
		@addfriend="addfriend"
		@clear="clear"
		></papor-left-popup>
		<!-- 小纸条列表 -->
		<block v-for="(item,index) in list" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<!-- 上拉加载 -->
		<load-more :loadtext="loadtext"></load-more>
	</view>
</template>

<script>
	
	import paperList from "../../components/paper/paper-list.vue"
	import loadMore from "../../components/common/load-more.vue"
	import paporLeftPopup from "../../components/paper/papor-left-popup.vue";
	export default {
		components:{
			paperList,
			loadMore,
			paporLeftPopup
		},
		data() {
			return {
				show:false,
				loadtext:"加载更多",
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
					},
					{
						userpic:"../../static/demo/userpic/8.jpg",
						username:"一只英俊的小马",
						time:"12:34",
						data:"你在草原上奔跑嘛",
						noreadnum:"11"
					},
					{
						userpic:"../../static/demo/userpic/8.jpg",
						username:"一只英俊的小马",
						time:"12:34",
						data:"你在草原上奔跑嘛",
						noreadnum:"11"
					},
					{
						userpic:"../../static/demo/userpic/8.jpg",
						username:"一只英俊的小马",
						time:"12:34",
						data:"你在草原上奔跑嘛",
						noreadnum:"11"
					},
					{
						userpic:"../../static/demo/userpic/8.jpg",
						username:"一只英俊的小马",
						time:"12:34",
						data:"你在草原上奔跑嘛",
						noreadnum:"11"
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
		// 监听上拉加载
		onReachBottom() {
			this.loadmore()
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
				uni.navigateTo({
					url: '../user-list/user-list',
					
				});
					break;
				case 1:
				this.showpopup()
					break;
			}
		},
		methods:{
			// 上拉加载
			loadmore(){
				if(this.loadtext != "加载更多"){return}
				this.loadtext = "加载中...";
				// 获取数据
				setTimeout(()=>{
					//获取完成
					let obj = {
							userpic:"../../static/demo/userpic/8.jpg",
							username:"strac",
							time:"11:04",
							data:"我在消消乐",
							noreadnum:"1"
					};
					this.list.push(obj);
					this.loadtext = "加载更多";
				},1000)
				// this.loadtext = "没有更多数据了"
			},
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
				
			},
			// 操作菜单
			addfriend(){
				console.log("加糗友")
				this.hidepopup()
			},
			clear(){
				console.log("清除缓存")
				this.hidepopup()
			},
			hidepopup(){
				this.show=false
			},
			showpopup(){
				this.show=true
			}
		}
	}
</script>

<style>
	.body{
		padding: 0 20upx;
	}
	
</style>
