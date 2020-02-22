<template>
		<view class="common-list u-f animated fadeInLeft fast">
			<!-- 左边 -->
			<view class="common-list-l">
				<!-- 头像 -->
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
			</view>
			<!-- 右边 -->
			<view class="common-list-r">
				<view>
					<view class="u-f-ac u-f-jsb">
						<view class="u-f-ac">
							{{item.username}} 
							<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
						</view>
						<view v-show="!isguanzhu" @tap="guanzhu" 
						class="icon iconfont icon-zengjia">关注</view>
					</view>
					<view class="common-list-r-time">26天前</view>
				</view>
				
				<view class="">{{item.title}}</view>
				<view class="u-f-ajc" style="flex-direction: column;">
					<!-- 图片 -->
					<block v-for="(pic,index) in item.morepic" :key="index">
						<image
						:src="pic" 
						mode="widthFix" 
						lazy-load
						style="margin-bottom: 10upx;"
						@tap="detailimg(index)">
						</image>
					</block>
					
					<!-- 视频 -->
					<template v-if="item.video">
						<view class="common-list-palay icon iconfont icon-bofang"></view>
						<view class="common-list-palayinfo">
							{{item.video.looknum}} 次播放 {{item.video.long}}
						</view>
					</template>
					<!-- 分享 -->
					<view class="common-list-share u-f-ac" v-if="item.shaer">
						<image :src="item.shaer.titleepic" mode="widthFix" lazy-load></image>
						<view>{{item.shaer.title}}</view>
					</view>
				</view>
				<view class="u-f-ac u-f-jsb">
					<view>{{item.path}}</view>
					<view class="u-f-ac">
						<view class="icon iconfont icon-zhuanfa">
							{{item.shaernum}}
						</view>
						<view class="icon iconfont icon-pinglun1">
							{{item.commonnum}}
						</view>
						<view class="icon iconfont icon-dianzan1">
							{{item.goodnum}}
						</view>
					</view>
				</view>
			</view>
		</view>
</template>

<script>
	import tagSexAge from '../common/tag-sex-age.vue';
	export default{
		components:{
			tagSexAge
		},
		props:{
			item:Object
		},
		data() {
			return {
				isguanzhu: this.item.isguanzhu
			}
		},
		methods:{
			// 关注
			guanzhu(){
				this.isguanzhu=true;
				uni.showToast({
					title:"关注成功"
				})
			},
			detailimg(index){
				// 预览图片
				uni.previewImage({
					current:index,
					urls:this.item.morepic
				})
			}
		}
	}
</script>

<style scoped>
	@import "../../common/list.css";
	.common-list-r{
		border: 0;
	}
	.common-list{
		border-bottom: 1upx solid #EEEEEE;
	}
	.common-list-r-time{
		padding: 15upx 0;
		color: #CCCCCC!important;
		font-size: 25upx;
		background: #FFFFFF!important;
	}
	.common-list-r>view:nth-child(1)>view:nth-child(1)>view:first-child{
		color: #999999;
		font-size: 32upx;
	}
	
	.common-list-r>view:nth-child(1)>view:nth-child(1)>view:last-child{
		background: #EEEEEE;
		padding: 0 10upx;
		font-size: 26upx;
	}
</style>
