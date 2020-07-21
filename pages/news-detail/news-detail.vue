<template>
	<view class="new_detail">
		<text class="title">
			{{ newsDetail.title }}
		</text>
		<view class="info">
			<text>
				发表时间: {{ newsDetail.add_time  | formatDate }}
			</text>
			<text>
				浏览: {{ newsDetail.click }}
			</text>
		</view>
		<rich-text :nodes="newsDetail.content"  class="content"></rich-text>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				id: 0,
				newsDetail:{}
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getDetail()
		},
		methods: {
			async getDetail(){
				let res = await this.$myRequest({
					url: '/api/getnew/'+this.id
				})
				this.newsDetail = res.data.message[0]
			}
		}
	}
</script>
<style lang="scss">
	.new_detail{
		font-size: 30rpx;
		padding: 0 20rpx;
		.title{
			width: 100%;
			text-align: center;
			display: block;
			margin: 20px 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
	}
	
</style>
