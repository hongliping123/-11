<template>
	<view>
		<!-- 话题接受 -->
		<topic-info :item="topicInfo"></topic-info>
		<!-- tabbar切换 -->
		<swiper-tab-head
		:tabBars="tabBars"
		:tabIndex="tabIndex"
		@tobtap="tobtap"
		scrollWidth="width: 50%;"
		scrollStyle="border-bottom:0;"
		>
		</swiper-tab-head>
		<!-- 列表 -->
		<view class="topic-detail-list">
			<block v-for="(item,index) in tablist" :key="index">
				<template v-if="tabIndex == index">
					<!-- 列表 -->
					<block  v-for="(list,listindex) in item.list" :key="listindex">
						<common-list :item="list" :index="listindex"></common-list>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadtext="item.loadtext"></load-more>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import topicInfo from "../../components/topic/topic-info.vue"
	import swiperTabHead from "../../components/index/swiper-tab-head.vue"
	import commonList from "../../components/common/common-list.vue"
	import loadMore from "../../components/common/load-more.vue"
	export default {
		components:{
			topicInfo,
			swiperTabHead,
			commonList,
			loadMore
		},
		
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{ name:"默认",id:"moren" },
					{ name:"最新",id:"zuixing" }
				],
				topicInfo:{
						titlepic:"../../static/demo/datapic/13.jpg",
						title:"忆往事 敬余生",
						dese:"我是描述",
						totalnum:"12",
						todaynum:"13"
				},
				tablist:[
					{
						loadtext:"加载更多",
						list:[
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
						]
					},
					{
						loadtext:"加载更多",
						list:[
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
						]
					}
				]
			}
		},
		 
		// 页面上拉触底事件
		onReachBottom(){
			// 上拉加载
			this.loadmore()
			
		},
		// 监听下拉刷新事件
		onPullDownRefresh() {
			// 上拉刷新
			this.getdata()
		},
		methods: {
			// 上拉刷新
			getdata(){
				setTimeout(()=> {
					// 获取数据
					let arr= [
								{
									userpic:"../../static/demo/userpic/10.jpg",
									username:"一只英俊的小马",
									sex:1, // 0男 1女
									age:30,
									isguanzhu:true,
									title:"我是一只在草原上奔跑的小🐎",
									titleepic:"",
									video:false,
									shaer:false,
									path:"湖南 衡阳",
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
							]
					// 赋值
					this.tablist[this.tabIndex].list = arr
					// 关闭下拉刷新
					uni.stopPullDownRefresh()
				}, 2000);
			},
			// 上拉加载
			loadmore(){
				if(this.tablist[this.tabIndex].loadtext != "加载更多"){return}
				this.tablist[this.tabIndex].loadtext = "加载中...";
				// 获取数据
				setTimeout(()=>{
					//获取完成
					let obj = {
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
					};
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].loadtext = "加载更多";
				},1000)
				// this.tablist[this.tabIndex].loadtext = "没有更多数据了"
			},
			// tabbar点击按钮
			tobtap(index){
				this.tabIndex = index
			}
		}
	}
</script>

<style>

</style>
