<template>
	<view class="papoer-list u-f-ac animated fadeInLeft fast">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view>
			<view class="u-f-ac u-f-jsb">{{item.username}} <view>10:12</view></view>
			<view class="u-f-ac u-f-jsb">
			{{item.data}}
			<template v-if="item.noreadnum>0">
				<uni-badge  :text="item.noreadnum" type="error" />
			</template>
			</view>
		</view>
	</view>
</template>

<script>
	import unibadgei from "../../components/uni-badge/uni-badge.vue"
	export default {
		components:{
			unibadgei
		},
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style scoped>
	.papoer-list{
		border-bottom: 1upx solid #EEEEEE;
		padding: 0 20upx 10upx 0;
	}
	.papoer-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	.papoer-list>view{
		flex: 1;
	}
	.papoer-list>view>view:first-child{
		font-size: 35upx;
	}
	.papoer-list>view>view:first-child>view{
		color: #CBCBCB;
	}
	.papoer-list>view>view:last-child{
		color: #999999;
	}
</style>
