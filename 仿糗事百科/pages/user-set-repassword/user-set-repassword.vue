<template>
	<view class="body">
		<input type="password" v-model="oldpassword"
		class="uni-input common-input" placeholder="输入旧密码"/>
		<input type="password" v-model="newpassword"
		class="uni-input common-input" placeholder="输入新密码"/>
		<input type="password" v-model="renpassword"
		class="uni-input common-input" placeholder="确认新密码"/>
		<button 
		class="user-set-but" 
		:class="{'user-set-but-disable':disabled}"
		:loading="loading"
		type="primary" 
		@tap="submit"
		:disabled="disabled">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpassword:"",
				newpassword:"",
				renpassword:"",
				disabled:true,
				loading:false
			}
		},
		watch:{
			oldpassword(val){
				this.change()
			},
			newpassword(val){
				this.change()
			},
			renpassword(val){
				this.change()
			}
		},
		methods: {
			// 监听输入框
			change(){
				if( this.oldpassword && this.newpassword && this.renpassword ){
					this.disabled = false
					return
				}
				this.disabled = true
			},
			// 验证层
			check(){
				if( !this.oldpassword || this.oldpassword == ""){
					uni.showToast({
						title: '旧密码不能为空',
						icon: "none"
					});
					return false
				}
				if( !this.newpassword || this.newpassword == ""){
					uni.showToast({
						title: '新密码不能为空',
						icon: "none"
					});
					return false
				}
				if( !this.renpassword || this.renpassword == ""){
					uni.showToast({
						title: '确认密码不能为空',
						icon: "none"
					});
					return false
				}
				if( this.renpassword !== this.newpassword ){
					uni.showToast({
						title: '确认密码和新密码不一致',
						icon: "none"
					});
					return false
				}
				return true
			},
			// 提交
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

</style>
