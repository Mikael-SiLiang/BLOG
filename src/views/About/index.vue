<template>
	<div class="about-container" v-loading="loading || !srcLoaded">
		<iframe class="about-content" :src="data" frameborder="0" v-if="data" @load="srcLoaded = true"></iframe>
	</div>
</template>

<script>
import{mapState} from "vuex";
export default {
	computed:mapState("about",["data","loading"]),
	created(){
		this.$store.dispatch("about/fetchAbout")
	},
	data(){
		return {
			srcLoaded: false,
		}
	}
}
</script>

<style scoped lang="less">
.about-container{
	width: 100%;
	height: 100%;
	overflow:hidden;
	position: relative;
}
.about-content{
	width: 100%;
	height: 100%;
	display: block;
	box-sizing: border-box;
}
</style>