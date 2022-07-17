<template>
    <div class="test-container">
        <Menu />
    </div>
</template>

<script>
import Menu from "./";
export default {
    components:{
        Menu,
    }
}
</script>

<style scoped lang="less">
.test-container{
    width: 400px;
    height: 600px;
    background: #000;
    margin: 0 auto;
}
</style>