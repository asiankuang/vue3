<template>
  <h1>{{ $t(`message.Home`) }}</h1>
  <div @click="change('zh')">中文</div>
  <div @click="change('en')">English</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n' //要在js中使用国际化
export default defineComponent({
  name: 'LoginPage',
  setup: () => {
    const { proxy } = getCurrentInstance()
    function change(type: string) {
      proxy.$i18n.locale = type
    }
    const { t } = useI18n()
    return { change }
  },
})
</script>

<style scoped lang="scss">
a {
  color: $test-color;
}
</style>
