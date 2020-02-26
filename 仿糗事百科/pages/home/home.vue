<template>
	<view>
		<template v-if="!islogin">
			<!-- 未登入 -->
			<view class="u-f-ajc">登入糗百,体验更多功能</view>
			<!-- 第三方登入 -->
			<other-login></other-login>
			<!-- 账号密码登入 -->
			<view class="u-f-ajc">账号密码登入<view class="icon iconfont icon-jinru"></view></view>
		</template>
		
		<!-- 登入 -->
		<template v-else>
			<home-info :homeinfo="homeinfo"></home-info>
		</template>
		
		<!-- 数据 -->
		<home-data :homeData='homeData'></home-data>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc">
			<image  src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home-list" >
			<block v-for="(item,index) in list" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
		</view>
		
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue';
	import homeInfo from '../../components/home/home-info.vue';
	import otherLogin from '../../components/home/other-login.vue';
	import homeData from '../../components/home/home-data.vue';
	export default {
		components:{
			homeListItem,
			homeInfo,
			otherLogin,
			homeData
		},
		data() {
			return {
				islogin:false,
				homeinfo:{
					username:'一只英俊的小马',
					userpic:'../../static/demo/userpic/14.jpg',
					totalnum:0,
					todaynum:0
				},
				homeData:[
					{ name:"糗事", num:"0" },
					{ name:"动态", num:"0" },
					{ name:"评论", num:"0" },
					{ name:"收藏", num:"0" }
				],
				list:[
					{
						icon:"liulan",
						name:"浏览历史",
						clicktype:"",
						url:""
					},
					{
						icon:"huiyuanvip",
						name:"糗百认证",
						clicktype:"",
						url:""
					},
					{
						icon:"keyboard",
						name:"审核糗事",
						clicktype:"",
						url:""
					}
				]
			};
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				uni.navigateTo({
					url: '../user-set/user-set',
				});
			}
		}
	}
</script>

<style>
.home-list{
	padding: 20upx;
}

.home-adv{
	padding: 20upx;
}
.home-adv>image{
	border-radius: 20upx;
	width: 100%;
	height: 150upx;
}


</style>
