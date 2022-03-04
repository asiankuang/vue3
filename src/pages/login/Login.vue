<template>
  <a>{{ count }}</a>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'LoginPage',
  setup: () => {
    const count = ref(0)
    return { count }
  },
})
</script>

<style scoped lang="scss">
a {
  color: $test-color;
}
</style>
