<template>
	<view class="user-list u-f animated fadeInLeft fast">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view class="u-f-ac u-f-jsb">
			<view >
				<view class="user-text">{{item.username}}</view>
				<view style="display: inline-block;">
					<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
				</view>
			</view>
				
			<view class="icon iconfont" 
			:class="[item.isguanzhu?'icon-xuanze-yixuan':'icon-zengjia1']"
			></view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from '../../components/common/tag-sex-age.vue';
	export default {
		components:{
			tagSexAge
		},
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style scoped>
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
	}
	.user-list>view:first-of-type{
		flex: 1;
	}
	.user-list>view:first-of-type>view:first-child{
		font-size: 35upx;
	}
	.user-list>view:last-of-type{
		width: 80upx;
		color:#CCCCCC;
	}
	
	.user-text{
		color: #333333 !important;
		font-weight: bold !important;
	}
	.icon-zengjia1{
		color: #f8791b;
	}
</style>
