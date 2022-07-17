<template>
    <div class="test-container">
        <Contact />
    </div>
</template>

<script>
import Contact from "./";
export default {
    components:{
        Contact,
    }
}
</script>

<style scoped lang="less">
    .test-container{
        background: pink;
        width: 300px;
        height: 500px;
    }
</style>