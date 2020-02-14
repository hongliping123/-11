<template>
	<view class="topic-new">
		<view>最近更新</view>
		<block v-for="(item,index) in list" :key="index">
			<view class="topic-list u-f">
				<image 
				:src="item.titlepic" 
				mode="widthFix" 
				lazy-load
				>
				</image>
				<view>
					<view>{{item.title}}</view>
					<view>{{item.desc}}</view>
					<view>动态 {{item.totalnum}} 今日 {{item.todaynum}}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			list:Array
		}
	}
</script>

<style scoped>
	.topic-new{
		padding: 20upx;
	}
	.topic-new>view:first-child{
		padding-bottom: 5upx;
		font-size: 32upx;
	}
	.topic-list{
		padding: 20upx 0;
		border-bottom: 1upx solid #EEEEEE;
	}
	.topic-list image{
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 20upx;
	}
	.topic-list>view>view{
		color: #A4A4A4;
	}
	.topic-list>view>view:first-child{
		font-size: 32upx;
		color: #333333;
	}
</style>
