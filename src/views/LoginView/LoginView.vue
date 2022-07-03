<template>
  <div class="login">
    <small>Not logged in?</small>
    <button type="button" @click="loginClick()">Login</button>
  </div>
</template>

<script>
import { login } from "../../utils/auth";
export default {
  name: "LoginView",
  data() {
    return {};
  },
  computed: {},
  methods: {
    loginClick() {
      login();
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "./LoginView.style.scss";
</style>
