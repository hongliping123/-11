<template>
	<view>
		<!-- 自定义导航栏 -->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @change-tab="chngetap"></news-nav-bar>
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="index">
			<common-list :item="item" :index="index"></common-list>
		</block>
		
		
	</view>
</template>

<script>
	
	import commonList from "../../components/common/common-list.vue"
	import newsNavBar from "../../components/news/news-nav-bar.vue"
	export default {
		components:{
			commonList,
			newsNavBar
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{name:"关注",id:"guanzhu"},
					{name:"话题",id:"topic"}
				],
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
			};
		},
		methods:{
			// tab切换
			chngetap(index){
				this.tabIndex = index
			},
			
		},
		
	}
</script>

<style>
</style>
