<template>
	<view>
		<!-- 状态条 -->
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<!-- 关闭按钮 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<!-- 引入背景图 -->
		<image 
		class="loginhead" 
		src="../../static/common/loginhead.png" mode="widthFix" lazy-load></image>
		
		<!-- 输入框 -->
		<view class="body">
			<input type="text"
			v-model="phoneText"
			class="uni-input common-input"
			placeholder="昵称手机号邮箱"/>
			
			<input type="text" v-model="password"
			class="uni-input common-input" 
			password
			placeholder="请输入密码"/>
			
			<button 
			class="user-set-but" 
			:class="{'user-set-but-disable':disabled}"
			:loading="loading"
			type="primary" 
			@tap="submit"
			:disabled="disabled">完成</button>
		</view>
		
		<!-- 登入状态切换 -->
		<view class="login-status u-f-ajc login-padding ">
			验证码登入
			<view class="icon iconfont icon-jinru login-padding login-font-color"></view>
		</view>
		<!-- 第三方登入 -->
		<view class="other-login-title u-f-ajc login-padding login-font-color" >第三方登入</view>
		<other-login></other-login>
		<!-- 协议 -->
		<view class="login-rule u-f-ajc login-padding login-font-color">
			注册即代表您同意 <view class="">《XXX协议》</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue"
	import otherLogin from "../../components/home/other-login.vue"
	export default {
		components:{
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				disabled:true,
				loading:false,
				phoneText:"",
				password:""
			}
		},
		watch:{
			phoneText(val){
				this.change()
			},
			password(val){
				this.change()
			}
		},
		methods: {
			// 监听输入框
			change(){
				if( this.phoneText && this.password ){
					this.disabled = false
					return
				}
				this.disabled = true
			},
			// 验证层
			check(){
				if( !this.phoneText || this.phoneText == "" ){
					uni.showToast({
						title: '手机号码不能为空',
						icon:"none"
					});
					return
				}
				
				let mPattern = /^1[3456789]\d{9}$/
				if(!mPattern.test(this.phoneText)){
					uni.showToast({
						title: '手机号码格式不正确',
						icon:"none"
					});
					return
				}

				if( !this.password || this.password == ""){
					uni.showToast({
						title: '密码不能为空',
						icon: "none"
					});
					return false
				}
		
				return true
			},
			// 返回上一页
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			// 登入
			submit(){
				this.loading = true
				this.disabled = true
				if( !this.check() ){ 
					this.loading = false
					this.disabled = false
					return 
				}
				uni.showToast({
					title: '验证通过'
				});
				this.loading = false
				this.disabled = false
			}
		}
	}
</script>

<style>
@import "../../common/form.css";
.login-font-color{
	color: #CCCCCC;
}
.login-padding{
	padding: 20upx 0;
}
.loginhead{
	width: 100%;
}
.icon-guanbi{
	position: fixed;
	top: 60upx;
	left: 30upx;
	font-size: 40upx;
	font-weight: bold;
	color: #332F0A;
}
.other-login-title{
	position: relative;
}
.other-login-title::before,.other-login-title::after{
	content: '';
	position: absolute;
	background-color: #CCCCCC;
	height: 1upx;
	width: 100upx;
	top: 50%;
}
.other-login-title::before{
	left: 25%;
}
.other-login-title::after{
	right: 25%;
}
</style>
