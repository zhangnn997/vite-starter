<template>
  <div>this is home page</div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW: (_url, registration) => {
      setInterval(() => {
        registration?.update()
      }, 3600000)
    }
  })
})
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
