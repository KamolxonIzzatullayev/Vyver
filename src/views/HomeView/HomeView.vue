<template>
  <div class="home">
    <LeftMenu />
    <TopMenu />
  </div>
</template>

<script>
import LeftMenu from "../../components/LeftMenu/LeftMenu.vue";
import TopMenu from "../../components/TopMenu/TopMenu.vue";
export default {
  name: "HomeView",
  components: { LeftMenu, TopMenu },
};
</script>

<style lang="scss" scoped>
@import "./HomeView.style.scss";
</style>
