<template>
	<div class="blog-toc-container">
		<h2>目录</h2>
		<RightList :list="tocWithSelect" @select="handleSelect" />
	</div>
</template>

<script>
import RightList from "./RightList.vue";
import {debounce} from "@/utils";
export default {
	components:{
		RightList,
	},
	props:{
		toc:{
			type:Array,
		}
	},
	data(){
		return{
			activeAnchor:"",
		}
	},
	created(){
		this.setSelectDebounce = debounce(this.setSelect,50);
		this.$bus.$on("mainScroll",this.setSelectDebounce);
	},
	destroyed(){
		this.$bus.$off("mainScroll",this.setSelectDebounce);
	},
	methods:{
		handleSelect(item){
			location.hash = item.anchor;
		},
		setSelect(scrollDom){
			if(!scrollDom){
				return;
			}
			this.activeAnchor="";
			const range = 100;
			for (const dom of this.doms) {
				if(!dom){
					continue;
				};
				const top = dom.getBoundingClientRect().top;
				if(top>=0 && top<=range){
					this.activeAnchor = dom.id;
					return;
				}else if(top>range){
					return;
				}else{
					this.activeAnchor = dom.id;
				}
			}
		}
	},
	computed:{
		tocWithSelect(){
			const getTOC = (toc=[])=>{
				return toc.map((item)=>({
					...item,
					isSelect:item.anchor === this.activeAnchor,
					children:getTOC(item.children),
				}));
			};
			return getTOC(this.toc);
		},
		doms(){
			const doms=[];
			const addToDoms = (toc)=>{
				for(const item of toc){
					doms.push(document.getElementById(item.anchor));
					if(item.children && item.children.length){
						addToDoms(item.children);
					}
				}
			};
			addToDoms(this.toc);
			return doms;
		}
	},
}
</script>

<style scoped lang="less">
.blog-toc-container{
	h2{
		font-weight: bold;
		letter-spacing: 2px;
		font-size:1em;
		margin:0;
	}
}
</style>