<template>
  <h1>{{ $t(`message.Home`) }}</h1>
  <div @click="change('zh')">中文</div>
  <div @click="change('en')">English</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'LoginPage',
  setup: () => {
    const { proxy } = getCurrentInstance() || {}
    function change(type: string) {
      proxy!.$i18n.locale = type
    }
    return { change }
  },
})
</script>

<style scoped lang="scss">
a {
  color: $test-color;
}
</style>
