<template>
  <div class="msg">
    {{msg}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'message',
  computed: {
    ...mapState(['msg'])
  }
}
</script>

<style lang="scss" scoped>
.msg {
  font-weight: bolder;
}
</style>