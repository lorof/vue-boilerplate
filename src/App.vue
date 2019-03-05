<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-shadow: 0 1px 1px rgba(0,0,0,.1);
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
