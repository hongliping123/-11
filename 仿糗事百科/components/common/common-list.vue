<template>
		<view class="common-list u-f animated fadeInLeft fast">
			<!-- 左边 -->
			<view class="common-list-l">
				<!-- 头像 -->
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
			</view>
			<!-- 右边 -->
			<view class="common-list-r">
				<view class="u-f-ac u-f-jsb">
					<view class="u-f-ac">
						{{item.username}}
						<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
					</view>
					<view 
					v-show="!isguanzhu" 
					class="icon iconfont icon-zengjia"
					@tap="guanzhu"
					>
					关注</view>
				</view>
				<view class="">{{item.title}}</view>
				<view class="u-f-ajc">
					<!-- 图片 -->
					<image 
					v-if="item.titleepic"
					:src="item.titleepic" 
					mode="widthFix" 
					lazy-load>
					</image>
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
	import tagSexAge from './tag-sex-age.vue';
	export default{
		components:{
			tagSexAge
		},
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				isguanzhu: this.item.isguanzhu
			}
		},
		methods:{
			guanzhu(){
				this.isguanzhu=true;
				uni.showToast({
					title:"关注成功"
				})
			}
		}
	}
</script>

<style scoped>
	.common-list{
		padding: 20upx;
	}
	.common-list-l{
		flex-shrink: 0;
	}
	.common-list-l image{
		width: 90upx;
		height: 90upx;
		border-radius: 100%;
	}
	.common-list-r{
		flex: 1;
		margin-left: 15upx;
		border-bottom: 1upx solid #BBBBBB;
		padding-bottom: 10upx;
	}
	.common-list-r>view:nth-child(3)>image{
		/* width: 100%;
		border: 1upx solid; */
		border-radius: 10upx;
	}
	.common-list-r>view:nth-child(1)>view:first-child{
		color: #999999;
		font-size: 32upx;
	}
	.tag-ses1{
		color: #FFFFFF;
		padding: 2upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		font-size: 23upx;
		line-height: 26upx;
		background-color: pink;
	}
	.tag-ses{
		background-color: #007AFF;
		color: #FFFFFF;
		padding: 2upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		font-size: 23upx;
		line-height: 26upx;
	}
	.common-list-r>view:nth-child(1)>view:last-child{
		background-color: #EEEEEE;
		padding: 0 10upx;
		font-size: 26upx;
	}
	.common-list-r>view:nth-child(2){
		font-size: 32upx;
		padding: 12upx 0;
	}
	.common-list-r>view:nth-child(3){
		position: relative;
		margin-bottom: 10upx;
	}
	.common-list-palay,.common-list-palayinfo{
		position: absolute;
		color: #FFFFFF
	}
	.common-list-palay{
		font-size: 130upx;
	}
	.common-list-palayinfo{
		right: 20upx;
		bottom: 10upx;
		background: rgba(51,51,51,0.40);
		border-radius: 10upx;
		padding: 0 20upx;
		font-size: 26upx;
	}
	.common-list-r>view:nth-child(4)>view{
		color: #AAAAAA;
	}
	.common-list-r>view:nth-child(4)>view:nth-child(2)>view{
		margin-left: 10upx;
		padding-left: 5upx;
		font-size: 28upx;
	}
	.common-list-share{
		background-color: #EEEEEE;
		width: 100%;
		padding: 10upx;
		border-radius: 10upx;
	}
	.common-list-share>image{
		width: 200upx;
		height: 150upx;
		margin-right: 10upx;
	}
</style>
