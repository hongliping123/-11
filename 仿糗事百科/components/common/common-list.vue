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
	@import "../../common/list.css";
</style>
