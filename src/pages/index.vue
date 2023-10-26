<template>
  <div>Hello World</div>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
const msg = ref('hello world')
</script>

<style scoped></style>
