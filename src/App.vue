<template>
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data() {
    return {}
  },
})
</script>

<style scoped lang="scss"></style>
