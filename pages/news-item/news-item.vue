<template>
	<view>
		<view
			@click="navigator(item.id)"
			v-for="item in newsList"
			:key="item.id"
			class="news_item" >
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="title">
					 {{ item.title }}
				</view>
				<view class="info">
					 <text>
						 发表时间:{{ item.add_time | formatDate }}
					 </text>
					 <text>
						 浏览:{{ item.click }}
					 </text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['newsList'],
		filters:{
			formatDate(data){
				const date = new Date(data)
				let year = date.getFullYear()
				let month = (date.getMonth()+1).toString().padStart(2,0)//不足两位追加0
				let day = date.getDay().toString().padStart(2,0)
				let hour = date.getHours().toString().padStart(2,0)
				let minute = date.getMinutes().toString().padStart(2,0)
				let seconds = date.getSeconds().toString().padStart(2,0)
				let time = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+seconds
				return time
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>
<style lang="scss">
	.news_item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.right{
			margin: 0 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 33rpx;
			}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
