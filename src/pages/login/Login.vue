<template>
  <div class="login-box">
    <div class="login-content">
      <el-checkbox v-model="value"></el-checkbox>
      <span> {{ x }} , {{ y }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { useLocalStorage, useMouse, usePreferredDark, debounceFilter } from '@vueuse/core'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const value = ref<string>('')
    // tracks mouse position
    const { x, y } = useMouse({ eventFilter: debounceFilter(1000) })

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage('my-storage', {
      name: 'Apple',
      color: 'red',
    })

    return { x, y, isDark, store, value }
  },
})
</script>

<style scoped lang="scss">
.login-box {
  width: 100wh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-content {
    width: 380px;
    height: 400px;
    background: rgba(13, 10, 43, 0.7);
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 5%);
    padding: 32px 36px;
  }
}
</style>
