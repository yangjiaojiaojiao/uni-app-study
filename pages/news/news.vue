<template>
	<view class="news">
		<newsItem 
			:newsList="newsList" 
			@itemClick="goDetail"></newsItem>
	</view>
</template>

<script>
	import newsItem from '../news-item/news-item'
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		components:{
			newsItem
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.newsList = res.data.message
			},
			goDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
