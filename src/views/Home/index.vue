<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="loading"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index >= 1">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      @click="switchTo(index + 1)"
      v-show="index < data.length - 1"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: i === index }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  color: @gray;
  @gap: 25px;
  font-size: 30px;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    border: 1px solid #fff;
    margin-bottom: 10px;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>

<script>
import Carouselitem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: 0, //当前显示第几张轮播图
      containerHeight: 0, //整个容器的高度
      switching: false,
    };
  },
  components: {
    Carouselitem,
    Icon,
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        //只有滚动距离大于5才触发事件
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      //翻页效果结束触发事件
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>


