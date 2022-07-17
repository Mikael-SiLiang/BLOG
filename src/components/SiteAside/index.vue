<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>
    <Menu />
    <Contact v-if="data" />
    <p class="footer" v-if="data">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Contact from "@/components/Contact";
import Menu from "@/components/Menu";
import Avatar from "@/components/Avatar";
import { mapState } from "vuex";
export default {
  components: {
    Contact,
    Menu,
    Avatar,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 15px auto;
}
.site-aside-container > h1 {
  padding: 0 0 20px 0;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>