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
		<!-- 弹出公告 -->
		<uni-popup ref="popup" >   <!-- @change="change" -->
			<view class="gonggo">
				<view class="u-f-ajc">
					<image src="../../static/common/addinput.png" mode="widthFix"></image>
				</view>
				<view class="">
					1.涉及黄色信息，政治，击骚扰信息
				</view>
				<view class="">
					1.涉及黄色信息，政治，击骚扰信息
				</view>
				<view class="">
					1.涉及黄色信息，政治，击骚扰信息
				</view>
				<view class="">
					1.涉及黄色信息，政治，击骚扰信息
				</view>
				<button type="default" @tap="changeg">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBarv from "../../components/uni-nav-bar/uni-nav-bar.vue";
	import uploudImags from "../../components/common/uploud-imags.vue";
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	let changelook = ['所有人可见','仅自己可见'];
	
	export default {
		components:{
			uniNavBarv,
			uploudImags,
			uniPopup
		},
		data() {
			return {
				isget:false,
				yinshi:"所有人可见",
				text:'', 
				imageList:[],
			}
		},
		// 监听页面返回事件
		onBackPress() {
			if(!this.text && this.imageList.length<1){return}
			if(!this.isget)	{
				this.baocun()
				return true;
			}
		},
		onReady () { 
			// 默认页面加载弹出层
			this.$refs.popup.open() 
		},
		
		methods: {
			// 保存为草稿
			baocun(){
				uni.showModal({
					content: '是否保存为草稿',
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						if(res.confirm){
							console.log("保存")
						}else{
							console.log("不保存")
						}
						this.isget = true
						uni.navigateBack({
							delta:1
						})
					},
				});
			},
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
			
	
			// 关闭弹出层
			changeg(){
				this.$refs.popup.close() 
			},
			// 
			uploud(arr){
				this.imageList = arr;
			},
			
			
		},
	}
</script>

<style>
	.uni-textarea{
		border: 1upx solid #EEEEEE;
	}
	.gonggo{
		background-color: #FFFFFF;
		padding: 50upx 50upx 20upx 50upx;
		border-radius: 10upx;
	}
	.gonggo image{
		width: 85%;
		margin-bottom: 20upx;
	}
	.gonggo button{
		background-color: #ffe934;
		color: #171606;
		margin-top: 20upx;
	}
</style>
