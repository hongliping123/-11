<template>
	<view class="body">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>头像</view>
			<view class="u-f-ajc" @tap="changeimg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>昵称</view>
			<view class="u-f-ajc">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>性别</view>
			<view class="u-f-ajc" @tap="changeOne('sex')">
				<view>{{sex}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>生日</view>
			<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="u-f-ajc">
					<view>{{birthday}}</view>
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</picker>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>情感</view>
			<view class="u-f-ajc"  @tap="changeOne('qg')">
				<view>{{qg}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>职业</view>
			<view class="u-f-ajc"  @tap="changeOne('job')">
				<view>{{job}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>家乡</view>
			<view class="u-f-ajc">
				<view>湖南衡阳</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		
		<button class="user-set-but" type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	let sex = [ '不限' , '男' , '女' ]
	let qg = [ '未婚' , '已婚' , '离异' , '丧偶' , '私密']
	let job = [ 'IT' , '老师' ,  '农民' ]
	export default {
		data() {
			return {
				userpic:"../../static/demo/userpic/1.jpg",
				username:"一只英俊的小马",
				sex:"不限",
				qg:"未婚",
				job:"IT",
				birthday:"1995-09-06"
			}
		},
		computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		},
		methods: {
			// 修改生日
			 bindDateChange(e) {
				this.birthday = e.target.value
			},
			// 修改头像
			changeimg(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				    success: (res) => {
						this.userpic = res.tempFilePaths
				    }
				});
			},
			// 单列选择
			changeOne(val){
				let arr = []
				switch(val){
					case "sex":
						arr = sex;
						break;
					case "qg":
						arr = qg
						break;
					case "job":
						arr = job
						break;
				}
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						switch(val){
							case "sex":
								this.sex = arr[res.tapIndex]
								break;
							case "qg":
								this.qg = arr[res.tapIndex]
								break;
							case "job":
								this.job = arr[res.tapIndex]
								break;
						}
					}
				});
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			submit(){}
		}
	}
</script>
 
<style>
@import "../../common/form.css";
.user-set-userinfo-list{
	padding: 20upx;
	 border-bottom: 1upx solid #F4F4F4;
}
.user-set-userinfo-list>view:first-child{
	font-size: 32upx;
	font-weight: bold;
	color: #9b9b9b;
}
.user-set-userinfo-list>view:last-child>image{
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
}
.user-set-userinfo-list>view:last-child>view:last-of-type{
	margin-left: 20upx;
	color: #9b9b9b;
}
.user-set-userinfo-list>view:last-child>input{
	text-align: right;
}
</style>
