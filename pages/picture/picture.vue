<template>
	<view class="pics">
		<scroll-view 
			class="scroll-view" 
			scroll-y>
			<view 
				v-for="(item,index) in picCateList" 
				:key="item.id" 
				:id="item.id" 
				:class="active===index?'active':''"
				@click="getPictures(index, item.id)">
				{{ item.title }}
			</view>
		</scroll-view> 
		<scroll-view
			class="pic-view" 
			scroll-y>
			<view 
				v-for="(item,index) in secondPics" 
				:key="item.id">
				<image 
				:src="item.img_url"
				@click="previewImage(item.img_url)">
				</image>
				<text>{{ item.title }}</text>
				<text>{{ item.zhaiyao }}</text>
			</view>
			<text v-if="secondPics.length === 0">暂无数据</text>
		</scroll-view> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picCateList: [],
				active: 0,
				secondPics: []
			}
		},
		onLoad() {
			this.getPicsCate()
		},
		methods: {
			async getPicsCate(){
				let res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.picCateList = res.data.message
				this.getPictures(0, this.picCateList[0].id)
			},
			async getPictures(index,id){
				this.active = index
				let res = await this.$myRequest({
					url: '/api/getimages/'+ id
				})
				this.secondPics = res.data.message
			},
			previewImage(current){
				// let urls = []
				// this.secondPics.forEach(ele=>{
				// 	urlList.push(ele.img_url)
				// })
				let urls = this.secondPics.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.scroll-view{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				// background-color: $shop-color;
				color: #000;
				font-size: 30rpx;
				text-align: center;
				border-top: 1px solid #eee;
			}
			.active{
				color: #fff;
				background-color: $shop-color;
			}
		}
		.pic-view{
			width: 530rpx;
			height: 100%;
			margin: 0 auto;
			image{
				width: 530rpx;
				height: 530rpx;
				border-radius: 5px;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
		
	}
</style>
