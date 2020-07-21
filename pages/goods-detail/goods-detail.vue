<template>
	<view class="goods_detail">
		<swiper
			indicator-dots
			autoplay>
			<swiper-item 
				v-for="item in swapersList" 
				:key='item.id' >
					<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>{{ goodsDetail.market_price }}</text>
				<text>{{ goodsDetail.sell_price }}</text>
			</view>
			<view class="goods_name">
				{{ goodsDetail.title }}
			</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>
				货号: {{ goodsDetail.goods_no }}
			</view>
			<view>
				库存: {{ goodsDetail.stock_quantity }}
			</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="title">
				详情介绍
			</view>
			<rich-text class="content" :nodes="goodDetailContent"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				swapersList: [],
				goodsDetail: {},
				goodDetailContent: ''
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getSwipers()
			this.getGoodsDetail()
			this.getdetailContent()
		},
		methods: {
			async getSwipers(){
				let res = await this.$myRequest({
					url: '/api/getthumimages/'+this.id
				})
				this.swapersList = res.data.message
			},
			async getGoodsDetail(){
				let res = await this.$myRequest({
					url: '/api/goods/getinfo/'+this.id
				})
				console.log(res)
				this.goodsDetail = res.data.message[0]
			},
			async getdetailContent(){
				let res = await this.$myRequest({
					url: '/api/goods/getdesc/'+ this.id
				})
				this.goodDetailContent = res.data.message[0].content
			}
		}
	}
</script>

<style lang="scss">
	.goods_detail{
		swiper{
			height: 700rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.box1{
			padding: 10px;
			.price{
				font-size: 38rpx;
				color: $shop-color;
				line-height: 80rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
			.goods_name{
				font-size: 32rpx;
			}
		}
		.box2{
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		.box3{
			.title{
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}
			.content{
				padding: 10px;
				color: #333;
				line-height: 50rpx;
				
			}
		}
	}
	.line{
		height: 10rpx;
		width: 750rpx;
		background-color: #eee;
	}
	.getImageLoad{
		width: 750rpx!important;
	}
</style>
