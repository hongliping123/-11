<template>
	<view>
		<detail-info :item="detail"></detail-info>
		
		<view class="u-comment-title">最新评论 {{comment.count}}</view>
			<view class="uni-comment u-comment">
				<block v-for="(item,index) in comment.list" :key="index">
					<comment-list :item="item" :index="index"></comment-list>
			</block>
		</view>
		
		<view style="height: 120upx;"></view>
		
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
		
		<!-- 分享 -->
		<moer-share :show="shareshow" @togle="togle()"></moer-share>
	</view>
</template>

<script>
	import detailInfo from '../../components/detail/detail-info.vue';
	import time from "../../common/time.js";
	import commentList from "../../components/detail/comment-list.vue";
	import userChatBottom from "../../components/user-chat/user-chat-buttom.vue";
	import moerShare from '../../components/common/moer-share.vue';
	export default {
		components:{
			detailInfo,
			commentList,
			userChatBottom,
			moerShare
		},
		data() {
			return {
				shareshow:false,
				comment:{
					count:20,
					list:[]
				},
				detail:{
					userpic:"../../static/demo/userpic/10.jpg",
					username:"三鱼先生",
					sex:1, // 0男 1女
					age:25,
					isguanzhu:false,
					title:"我是标题",
					titleepic:"../../static/demo/datapic/14.jpg",
					morepic:['../../static/demo/datapic/14.jpg','../../static/demo/datapic/14.jpg'],
					video:false,
					shaer:false,
					path:"深圳 罗湖",
					shaernum:20,
					commonnum:30,
					goodnum:50
				}
			}
		},
		onLoad(e) {
			this.initdata(JSON.parse(e.detailData))
			this.getcomment()
		},
		// 监听导航右边按钮
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				this.togle()
			}
		},
		methods: {
			togle(){
				this.shareshow = !this.shareshow
			},
			// 评论
			submit(data){
				let obj = {
						id:1,
						fid:0,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:time.gettime.gettime(new Date().getTime()),
						data:data
					};
				this.comment.list.push(obj)
			},
			// 获取评论
			getcomment(){
				let arr=[
					// 一级评论
					{
						id:1,
						fid:0,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"支持国产，支持DCloud!",
					},
					// 子级评论
					{
						id:2,
						fid:1,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"支持国产，支持DCloud!",
					},
					{
						id:3,
						fid:1,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"支持国产，支持DCloud!",
					},
					{
						id:4,
						fid:0,
						userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
						username:"小猫咪",
						time:"1555400035",
						data:"支持国产，支持DCloud!",
					},
				];
				for (let i = 0; i < arr.length; i++) {
					arr[i].time=time.gettime.gettime(arr[i].time);
				}
				this.comment.list=arr;
			},
			// 初始化数据
			initdata(obj){
				// 修改窗口标题
				uni.setNavigationBarTitle({
				    title: obj.title
				});
			}
		}
	}
</script>

<style>
	
	/* 评论 */
	.u-comment{
		padding: 0 20upx;
	}
	.u-comment-title{
		padding: 20upx;
		font-size: 30upx;
		font-weight: bold;
	}
	.moer-share-wx{
		background-color: #2ad19b;
	}
	.moer-share-pyp{
		background-color: #514d4c;
	}
	.moer-share-wb{
		background-color: #ee5e5e;
	}
	.moer-share-QQ{
		background-color: #4a7cba;
	}
</style>
