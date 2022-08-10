<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    document.title = "Chatroom";
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
}
</style>
