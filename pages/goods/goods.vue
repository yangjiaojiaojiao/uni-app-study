<template>
	<view class="good_list">
		<goods-lists :goods = "goodsList"></goods-lists>
		<view class="is_over" v-if="show">
			- 我是没有底线的,但是列表有 -
		</view>
	</view>
</template>
<script>
	import goodsLists from '../../components/goods-list/goods-list'
	export default {
		components: {
			goodsLists
		},
		data() {
			return {
				goodsList:[],
				pageIndex: 1,
				show: false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {//上拉加载
			this.pageIndex++
			this.getGoodsList()
		},
		onPullDownRefresh() {//下拉刷新
			this.pageIndex = 1
			this.goodsList = []
			this.show = false
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.startPullDownRefresh()
				})
			},800)
		},
		methods: {
			async getGoodsList(callback){
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageIndex
				})
				this.show = res.data.message? true:false
				this.goodsList = this.goodsList.concat(res.data.message)
				uni.stopPullDownRefresh()
				callback && callback()
			}
		}
	}
</script>

<style lang="scss">
	.good_list{
		background-color: #eee;
		.is_over{
			width: 100%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 28rpx;
		}
	}
</style>
