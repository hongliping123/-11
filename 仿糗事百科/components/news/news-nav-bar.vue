<template>
	<view class="">
		<uni-nav-bar  :statusBar="true" @clickRight="openAdd" :fixed="true">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="nav-tab-bar margin_auto u-f-ajc">
				 <block v-for="(tab,index) in tabBars" :key="tab.id">
					 <view class="u-f-ajc" :class="{'active':tabIndex == index}" @tap="chngetap(index)">
						{{tab.name}}
						<view v-if="(tabIndex == index)" class="nav-tab-bar-line"></view>
					 </view>
				 </block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components:{
			uniNavBar
		},
		props:{
			tabBars:Array,
			tabIndex:Number
		},
		methods:{
			// tab切换
			chngetap(index){
				this.$emit('change-tab',index)
			},
			
			// 打开发布页
			openAdd(){
				uni.navigateTo({
					url:'../add-input/add-input'
				})
			},
		}
	}
</script>

<style scoped>
	.nav-left,.nav-right{
		/* border: 1upx solid; */
	}
	.nav-left>view,.nav-right>view{
		font-size: 40upx;
	}
	.nav-left{
		margin-left: 16upx;
	}
	.nav-left>view{
		color: #ff9619;
	}
	.nav-right{
		margin-left: 40upx;
	}
	.nav-tab-bar{
		width: 100%;
		position: relative;
	}
	.nav-tab-bar>view{
		/* border: 1upx solid; */
		font-size: 32upx;
		font-weight: bold;
		color: #969696;
		padding: 0 15upx;
	}
	.active{
		color: #333333 !important;
	}
	.active .nav-tab-bar-line{
		border-bottom: 5upx solid #FEDE33;
		border-top: 5upx solid #FEDE33;
		border-radius: 20upx;
		width: 70upx;
		position: absolute;
		bottom: 12upx;
	}
</style>
