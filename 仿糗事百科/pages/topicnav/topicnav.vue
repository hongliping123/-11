<template>
	<view>
		<swiper-tab-head
		:tabBars="tabBars"
		:tabIndex="tabIndex"
		@tobtap="tobtap">
		</swiper-tab-head>
		
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(index)">
						<!-- 有内容样式 -->
						<template v-if="items.list.length>0">
							<!-- 话题列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<view class="topic-view">
									<topic-list :item="item" :index="index1"></topic-list>
								</view>
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
	import loadMore from "../../components/common/load-more.vue"
	import noThing from "../../components/common/no-thing.vue"
	import topicList from "../../components/news/topic-list.vue"
	export default {
		components:{
			swiperTabHead,
			loadMore,
			noThing,
			topicList
		},
		data() {
			return {
				swiperheight:0,
				tabIndex:0,
				tabBars:[
					{ name:"关注",id:"guanzhu" },
					{ name:"推荐",id:"tuijian" },
					{ name:"体育",id:"tiyu" },
					{ name:"热点",id:"redian" },
					{ name:"财经",id:"caijin" },
					{ name:"娱乐",id:"yule" },
				],
				newslist:[
					{
						loadtext:"上拉加载更多",
						list:[
							{
								titlepic:"../../static/demo/topicpic/3.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/4.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/5.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/6.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/7.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/8.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								titlepic:"../../static/demo/topicpic/3.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/4.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/5.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/6.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/7.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/8.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								titlepic:"../../static/demo/topicpic/3.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/4.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/5.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/6.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/7.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/8.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								titlepic:"../../static/demo/topicpic/3.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/4.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/5.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/6.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/7.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/8.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								titlepic:"../../static/demo/topicpic/3.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/4.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/5.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/6.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/7.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/8.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								titlepic:"../../static/demo/topicpic/3.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/4.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/5.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/6.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/7.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							},
							{
								titlepic:"../../static/demo/topicpic/8.jpeg",
								title:"#话题名称#",
								desc:"话题描述",
								totalnum:50,
								todaynum:20
							}
						]
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
		methods: {
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
							titlepic:"../../static/demo/topicpic/3.jpeg",
							title:"#话题名称#",
							desc:"话题描述",
							totalnum:50,
							todaynum:20
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
	.topic-view{
		padding: 0 20upx;
	}
</style>
