<template>
	<view>
		<uni-collapse :accordion="true">
			<uni-collapse-item 
			v-for="item in accordion" 
			:key="item.id" :title="item.title" :show-animation="item.animation">
				<view style="padding: 20px;">
					{{ item.content }}
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="body">
			<button class="user-set-but"
			type="primary" >意见反馈</button>
		</view>
	</view>
</template>

<script>
	import uniCollapse from '../../components/uni-collapse/uni-collapse.vue';
	import uniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue'

	export default {
		components:{
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				accordion: [{
						id: 0,
						title: '客服什么时候上线？',
						content: '上班时间：周一至周六早上9：00至晚上22：00，周日休息发货时间：周一至周六下午4点之前付款成功的订单当天发货，超过4点的隔天发货产品订购方式：官网注册下单，短信订购（订购电话：13349296337）    QQ订购（发送给官网右侧客服QQ 即可）  电话订购：4006751770备注说明：如有支付延迟，订单还是等待支付状态可以及时拨打客服热线或与客服QQ联系解决。（周末无客服情况，可以留言给客服QQ，周一给您查单）',
						animation: true
					},
					{
						id: 1,
						title: '忘记账号昵称密码怎么办？',
						content: '手风琴效果',
						animation: true
					},
					{
						id: 2,
						title: '怎么搜索查找关注取关用户',
						content: '手风琴效果',
						animation: true
					}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import "../../common/form.css";
</style>
