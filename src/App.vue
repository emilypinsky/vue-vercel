<template>
  <div>
    <h1>{{ $store.state.auth.isAuthenticated }}</h1>
    <button v-on:click="click">HIII</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(this.$store.state.auth.isAuthenticated);
  },
  methods: {
    click() {
      this.$store.dispatch(
        "setIsAuthenticated",
        !this.$store.state.auth.isAuthenticated
      );
    },
  },
};
</script>

<style>
</style>
