<template>
  <h1>{{ t(`message.Home`) }}</h1>
  <div @click="change('zh')">中文</div>
  <div @click="change('en')">English</div>
  <kyz></kyz>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'

const Kyz = {
  template: `
    <div>
      <p>Component1 locale messages</p>
    </div>
  `,
}
export default defineComponent({
  name: 'LoginPage',
  components: { kyz: Kyz },
  setup: () => {
    const { proxy } = getCurrentInstance() || {}
    function change(type: string) {
      proxy!.$i18n.locale = type
    }
    const { t } = useI18n({
      fallbackLocale: 'zh',
      messages: {
        en: { message: { Home: 'hello component1' } },
        zh: { message: { Home: 'こんにちは、component1' } },
      },
    })
    return { change, t }
  },
})
</script>

<style scoped lang="scss">
a {
  color: $test-color;
}
</style>
