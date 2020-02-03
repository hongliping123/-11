<template>
	<view>
		<!-- 自定义导航栏 -->
			<uni-nav-bar  left-icon="arrowleft"  @clickLeft="back"  :statusBar="true" rightText="发布"  
			@clickRight="submit">
				<view class="u-f-ajc margin_auto" @tap="changelook">
					{{yinshi}}
					<view class="icon iconfont icon-xialazhankai"></view>
				</view>
			</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="说一句话吧" />
		</view>
		<!-- 上传多图 -->
		<uploud-imags @uploud="uploud"></uploud-imags>
	</view>
</template>

<script>
	import uniNavBarv from "../../components/uni-nav-bar/uni-nav-bar.vue";
	import uploudImags from "../../components/common/uploud-imags.vue"
	let changelook = ['所有人可见','仅自己可见'];
	
	export default {
		components:{
			uniNavBarv,
			uploudImags
		},
		data() {
			return {
				yinshi:"所有人可见",
				text:'111',
				imageList:[]
			}
		},
		methods: {
			// 返回
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			// 发布
			submit(){
				console.log('我是发布')
			},
			// 隐私
			changelook(){
				uni.showActionSheet({
					itemList:changelook,
					success:(res)=> {
						this.yinshi = changelook[res.tapIndex]
					}
				})
			},
			
			uploud(arr){
				this.imageList = arr;
				console.log(this.imageList)
			}
		}
	}
</script>

<style>
	.uni-textarea{
		border: 1upx solid #EEEEEE;
	}
	
	
</style>
