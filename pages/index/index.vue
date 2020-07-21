<template>
	<view>
		<view class="home">
			<swiper 
				indicator-dots
				circular
				autoplay>
				<swiper-item 
					v-for="item in swiperList" 
					:key='item.id' >
						<image :src="item.img" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 导航区 -->
		<view class="nav">
			<view 
				class="nav_item"
				v-for="(item,index) in navsList"
				:key="index"
				@click="navsItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>
					{{ item.title }}
				</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<goods-lists :goods = "goodsList" @itemClick="toGoodDetail"></goods-lists>
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
				swiperList: [],
				goodsList: [],
				navsList: [
					{
						icon: 'iconfont icon-ziyuan',
						title: '山药超市',
						path: '/pages/goods/goods'
					},{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系不到',
						path: '/pages/contact/contact'
					},{
						icon: 'iconfont icon-tupian',
						title: '图片图片',
						path: '/pages/picture/picture'
					},{
						icon: 'iconfont icon-shipin',
						title: '视频视频',
						path: '/pages/goods/goods'
					}
				]
			}
		},
		onLoad() { //页面加载了
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图数据
			async getSwipers(){
				const res = await this.$myRequest({
					url: '/api/getlunbo',
				})
				this.swiperList = res.data.message
			},
			// 获取商品列表
			async getHotGoods(){
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goodsList = res.data.message
			},
			//点击导航item
			navsItemClick(path){
				uni.navigateTo({
					url: path
				})
			},
			toGoodDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.nav{
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background: $shop-color;
				margin: 10px auto;
				border-radius: 60rpx;
				line-height: 120rpx;
				color: #fff;
				font-size: 40rpx;
			}
			.icon-tupian{
				font-size: 35rpx;
			}
			text{
				font-size: 30rpx;
			}
		}
	}
	.hot_goods{
		background-color: #eee;
		overflow: hidden;
		margin-top: 10px;
		.title{
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			letter-spacing: 20px;
			background-color: #fff;
			text-align: center;
			margin: 7rpx 0;
		}
		
	}
</style>
