<template>
	<view>
		<!-- 自定义导航栏 -->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @change-tab="chngetap"></news-nav-bar>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item>
					<!-- 关注 -->
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore">
						<!-- 列表 -->
						<block v-for="(item,index) in guanzhu.list" :key="index">
							<common-list :item="item" :index="index"></common-list>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadtext="guanzhu.loadtext"></load-more>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<!-- 话题 -->
					<scroll-view scroll-y="true" class="list" >
						<!-- 搜索框 -->
						<view class="search-input">
							<input class="uni-input" placeholder-class="u-f-ajc icon iconfont icon-sousuo topic-search" placeholder="搜索内容" />
						</view>
						
						<!-- 轮播图 -->
						<!-- 热门分类 -->
						<!-- 最近更新 -->
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import loadMore from "../../components/common/load-more.vue"
	import commonList from "../../components/common/common-list.vue"
	import newsNavBar from "../../components/news/news-nav-bar.vue"
	export default {
		components:{
			commonList,
			newsNavBar,
			loadMore
		},
		data() {
			return {
				swiperheight:500,
				tabIndex:1,
				tabBars:[
					{name:"关注",id:"guanzhu"},
					{name:"话题",id:"topic"}
				],
				guanzhu:{
					loadtext:"上拉加载更多",
					list:[
						// 文字
						{
							userpic:"../../static/demo/userpic/10.jpg",
							username:"三鱼先生",
							sex:0, // 0男 1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titleepic:"",
							video:false,
							shaer:false,
							path:"深圳 罗湖",
							shaernum:20,
							commonnum:30,
							goodnum:50
						},	// 图文
						{
							userpic:"../../static/demo/userpic/10.jpg",
							username:"三鱼先生",
							sex:1, // 0男 1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titleepic:"../../static/demo/datapic/14.jpg",
							video:false,
							shaer:false,
							path:"深圳 罗湖",
							shaernum:20,
							commonnum:30,
							goodnum:50
						},
						// 视频
						{
							userpic:"../../static/demo/userpic/10.jpg",
							username:"三鱼先生",
							sex:0, // 0男 1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titleepic:"../../static/demo/datapic/14.jpg",
							video:{
								looknum:"20w",
								long:"2:17"
							},
							shaer:false,
							path:"深圳 罗湖",
							shaernum:20,
							commonnum:30,
							goodnum:50
						},
						// 分享
						{
							userpic:"../../static/demo/userpic/10.jpg",
							username:"三鱼先生",
							sex:0, // 0男 1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titleepic:"",
							video:false,
							shaer:{
								title:"一只英俊的小马",
								titleepic:"../../static/demo/datapic/44.jpg"
							},
							path:"深圳 罗湖",
							shaernum:20,
							commonnum:30,
							goodnum:50
						}
					
					]
				}
				
				
			};
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
		methods:{
			// tab切换
			chngetap(index){
				this.tabIndex = index
			},
			// 滑动事件
			tabChange(e){
				this.tabIndex = e.detail.current;
			},
			// 上拉加载
			loadmore(){
				if(this.guanzhu.loadtext != "上拉加载更多"){return}
				this.guanzhu.loadtext = "加载中...";
				// 获取数据
				setTimeout(()=>{
					//获取完成
					let obj = {
							userpic:"../../static/demo/userpic/10.jpg",
							username:"三鱼先生",
							sex:0, // 0男 1女
							age:25,
							isguanzhu:false,
							title:"我是标题",
							titleepic:"../../static/demo/datapic/14.jpg",
							video:{
								looknum:"20w",
								long:"2:17"
							},
							shaer:false,
							path:"深圳 罗湖",
							shaernum:20,
							commonnum:30,
							goodnum:50
					};
					this.guanzhu.list.push(obj);
					this.guanzhu.loadtext = "上拉加载更多";
				},1000)
				// this.guanzhu.loadtext = "没有更多数据了"
			}
		},
		
	}
</script>

<style>
	.search-input{
		padding: 20upx;
	}
	.search-input>input{
		background-color: #F4F4F4;
		border-radius: 10upx;
	}
	.topic-search{
		font-size: 27upx;
	}
	
</style>
