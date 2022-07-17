<template>
    <div class="test-container">
        <SiteAside />
    </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less"
export default {
    components:{
        SiteAside,
    }
}
</script>

<style>
.test-container{
    width: 30vw;
    height: 100vh;
    border: 2px solid red;
    margin: 0 auto;
}

</style>