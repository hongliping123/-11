<template>
	<view class="body">
		
		 <!-- tabbar切换 -->
		<swiper-tab-head
		:tabBars="tabBars"
		:tabIndex="tabIndex"
		@tobtap="tobtap"
		scrollWidth="width: 33.33%;"
		scrollStyle="border-bottom:0;"
		>
		</swiper-tab-head> 
		
		<!-- 好友列表 -->
		<!-- <block v-for="(item,index) in list" :key="index">
			
		</block> -->
		
		<view class="uni-tab-bar">
			<swiper class="swiper-box" 
			:style="{height: swiperheight+'px'}" 
			:current="tabIndex" 
			@change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(index)">
						<!-- 有内容样式 -->
						<template v-if="items.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<user-list :item="item" :index="index1"></user-list>
							</block>
							<!-- 上拉加载 -->
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<!-- 无内容默认 -->
						<template v-else>
							<no-thing></no-thing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import swiperTabHead from "../../components/index/swiper-tab-head.vue"
	import userList from "../../components/user-list/user-list.vue"
	import loadMore from "../../components/common/load-more.vue"
	import noThing from "../../components/common/no-thing.vue"
	export default {
		components:{
			swiperTabHead,
			userList,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperheight:0,
				tabIndex:0,
				tabBars:[
					{ name:"互关",id:"huguan",num:10},
					{ name:"关注",id:"guanzhu",num:10 },
					{ name:"粉丝",id:"fensi",num:10}
				],
				newslist:[
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"一只英俊的小马",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哒哒哒",
								age:19,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"一只英俊的小马",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哒哒哒",
								age:19,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"一只英俊的小马",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哒哒哒",
								age:19,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"一只英俊的小马",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哒哒哒",
								age:19,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"一只英俊的小马",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哒哒哒",
								age:19,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"一只英俊的小马",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哒哒哒",
								age:19,
								sex:1,
								isguanzhu:false
							},
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"一只英俊的小马",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哒哒哒",
								age:19,
								sex:1,
								isguanzhu:false
							}
						],
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"一只英俊的小马",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哒哒哒",
								age:19,
								sex:1,
								isguanzhu:false
							}
						],
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/demo/userpic/14.jpg",
								username:"一只英俊的小马",
								age:20,
								sex:0,
								isguanzhu:true
							},
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"哒哒哒",
								age:19,
								sex:1,
								isguanzhu:false
							}
						],
					}
				],
				
				
			}
		},
		onLoad() {
			uni.getSystemInfo({
			    success:(res) => {
					// 适配屏幕高度
			        let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height;
			    }
			});
		},
		// 监听导航按钮事件
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				uni.navigateBack({
					delta:1
				})
			}
		},
		methods: {
			// tab切换
			tobtap(index){
				this.tabIndex = index
			},
			// 滑动事件
			tabChange(e){
				this.tabIndex = e.detail.current;
			},
			// 上拉加载
			loadmore(index){
				if(this.newslist[index].loadtext != "上拉加载更多"){return}
				this.newslist[index].loadtext = "加载中...";
				// 获取数据
				setTimeout(()=>{
					//获取完成
					let obj = {
							userpic:"../../static/demo/userpic/14.jpg",
							username:"一只英俊的小马",
							age:20,
							sex:0,
							isguanzhu:true
					};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
				},1000)
				// this.newslist[index].loadtext = "没有更多数据了"
			}
		}
	}
</script>

<style>
/* .body{
	padding: 0 0 0 5upx;
} */

</style>
