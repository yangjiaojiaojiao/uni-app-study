<template>
	<view class="goods_list">
		 <view 
			class="goods_item"
			v-for="item in goods"
			:key="item.id">
			 <image :src="item.img_url" mode=""></image>
			 <view class="price">
				 <text> {{ item.sell_price }} </text>
				 <text> {{ item.market_price }} </text>
			 </view>
			 <view class="goods_name">
				 {{ item.title }}
			 </view>
		 </view>
	</view>
</template>
<script>
	export default {
		props: ['goods'],
	}
</script>

<style lang="scss">
	.goods_list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods_item{
			background-color: #fff;
			width: 355rpx;
			margin: 5px 0;
			padding: 15rpx;
			box-sizing: border-box;
			image{
				width: 100%;
				height: 150px;
			}
			.price{
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				text:nth-child(2){
					color: #ccc;
					font-size: 30rpx;
					margin-left: 20rpx;
					text-decoration: line-through;
				}
			}
			.goods_name{
				font-size: 30rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
