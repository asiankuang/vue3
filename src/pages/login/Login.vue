<template>
  <div class="login-box">
    <div class="login-content">234</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  setup: () => {
    return {}
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
