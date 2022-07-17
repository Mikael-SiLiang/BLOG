<template>
		<Layout>
			<div ref="mainContainer" class="main-container" v-loading="isLoading">
				<BlogDetail :blog="data" v-if="data" />
				<BlogComment v-if="!isLoading" />
			</div>
			<template #right> 
				<div class="right-container" v-loading="isLoading">
					<BlogTOC :toc="data.toc" v-if="data" />
				</div>
			</template>
		</Layout>

</template>

<script>
import fetchData from "@/mixins/fetchData";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import {getBlog} from "@/api/blog";
import BlogComment from "./components/BlogComment.vue";
import mainScroll from "@/mixins/mainScroll";
import {titleController} from "@/utils";
export default {
	components:{
		Layout,
		BlogDetail,
		BlogTOC,
		BlogComment,
	},
	mixins:[fetchData(null),mainScroll("mainContainer")],
	methods:{
		async fetchData(){
			let resp = await getBlog(this.$route.params.id);
			// resp = null;
			if (!resp){
				this.$router.push("/404");
				return;
			}
			titleController.setRouteTitle(resp.title);
			return resp;
		},
	},
	updated(){
		const hash = location.hash;
		location.hash = "";
		setTimeout(()=>{
			location.hash = hash;
		},50);
	}
}
</script>

<style scoped lang="less">
.main-container{
	width: 100%;
	height: 100%;
	padding: 20px;
	overflow-y: scroll;
	box-sizing: border-box;
	position: relative;
	overflow-x:hidden;
	scroll-behavior: smooth;
}
.right-container{
	width: 300px;
	height: 100%;
	overflow-y: scroll;
	box-sizing: border-box;
	position: relative;
	padding: 20px;
}
</style>