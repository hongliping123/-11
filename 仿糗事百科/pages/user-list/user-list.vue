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
		<view class="user-list u-f-ac">
			<image src="../../static/demo/userpic/14.jpg" mode="widthFix" lazy-load></image>
			<view>
				<view>昵称</view>
				<view style="display: inline-block;">
					<tag-sex-age sex="1" age="20"></tag-sex-age>
				</view>
				<view class="icon iconfont icon-xuanze-yixuan u-f-ajc"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from "../../components/index/swiper-tab-head.vue"
	import tagSexAge from '../../components/common/tag-sex-age.vue';
	
	export default {
		components:{
			swiperTabHead,
			tagSexAge
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{ name:"互关",id:"huguan",num:10},
					{ name:"关注",id:"guanzhu",num:10 },
					{ name:"粉丝",id:"fensi",num:10}
				],
			}
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
			}
		}
	}
</script>

<style>
.body{
	padding: 0 20upx;
}
.user-list{
	margin: 0 20upx; 
	padding: 20upx 0;
	border-bottom: 1upx solid #EEEEEE;
}
.user-list>image{
	width: 100upx;
	height: 100upx;
	border-radius: 100%;
	margin-right: 20upx;
	flex-shrink: 0;
	border: 1upx solid;
}
.user-list>view:first-of-type{
	/* flex: 1; */
}
.user-list>view:first-of-type>view:first-child{
	font-size: 35upx;
}
.user-list>view:last-of-type{
	width: 80upx;
	color:#CCCCCC;
}
</style>
