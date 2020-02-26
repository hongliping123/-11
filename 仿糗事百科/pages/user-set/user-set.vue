<template>
	<view class="body">
		<block v-for="(item,index) in list" :key="index">
			<home-list-item :item="item" :index="index"></home-list-item>
		</block>
		<button class="user-set-but" type="primary">退出登入</button>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue';
	export default {
		components:{
			homeListItem
		},
		data() {
			return {
				list:[
					{
						name:"账号与安全",
						clicktype:"navigateTo",
						url:"../../pages/user-set-repassword/user-set-repassword"
					},
					{
						name:"绑定邮箱",
						clicktype:"",
						url:""
					},
					{
						name:"资料编辑",
						clicktype:"",
						url:""
					},
					{
						name:"小纸条",
						clicktype:"",
						url:""
					},
					{
						name:"清除缓存",
						clicktype:"",
						url:""
					},
					{
						name:"意见反馈",
						clicktype:"",
						url:""
					},
					{
						name:"关于糗百",
						clicktype:"",
						url:""
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import "../../common/form.css";


</style>
