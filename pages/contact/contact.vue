<template>
	<view class="contant">
		<image src="https://hbimg.huabanimg.com/641d3011b15c728af86fdbbb39f7eb9800cd2a9ceefbc-uz1Hy2_fw658/format/webp" class="image"></image>
		<view class="info">
			<view 
				@click="phone">
				联系电话: {{ phoneNumber }}(点击拨打)
			</view>
			<view>
				联系地址: 山东省青岛市黄岛区长江路街道江山南路犄角旮旯
			</view>
			<map 
				class="map" 
				:latitude="latitude"
				:longitude="longitude"
				:scale="scale"
				:markers="covers">
			</map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber: '17802922576',
				latitude: 35.977251,
				longitude: 120.182518,
				scale: 11,
				covers:[
					{
						latitude: 35.977251,
						longitude: 120.182518,
						iconPath:'../../static/icon/mark.png',
						width: 30,
						height: 30
					}
				]
			}
		},
		methods: {
			phone(){
				console.log(this.phone)
				uni.makePhoneCall({
				    phoneNumber: this.phoneNumber
				})
			}
		}
	}
</script>

<style lang="scss">
	.contant{
		.image{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			view {
				font-size: 30rpx;
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
			.map{
				width: 750rpx;
				height: 750rpx;
			}
		}
	}
</style>
