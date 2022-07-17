<template>
    <RightList :list="list" @select="handleSelect"/>
</template>

<script>
import RightList from "./RightList.vue";
export default {        
    components:{
        RightList,
    },
    data(){
        return {
            list:[
                {name: "a", isSelect: false},
                {name: "b", isSelect: true, children:[
                    {name: "b-1",isSelect: true},
                    {name: "b-2",isSelect: false},
                ]},
                {name: "c", isSelect: false},
            ]
        }
    },
    methods:{
        handleSelect(item){
            console.log(item);
        }
    }
}
</script>

<style>

</style>