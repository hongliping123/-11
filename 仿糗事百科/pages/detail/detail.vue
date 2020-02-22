<template>
	<view>
		<detail-info :item="detail"></detail-info>
	</view>
</template>

<script>
	import detailInfo from '../../components/detail/detail-info.vue';
	export default {
		components:{
			detailInfo
		},
		data() {
			return {
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
		},
		// 监听导航右边按钮
		onNavigationBarButtonTap(e) {
			if(e.index == 0){
				console.log('分享')
			}
		},
		methods: {
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

</style>
