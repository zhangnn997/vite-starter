import HelloWorld from '@/components/HelloWorld.vue';
<template>
  <div ref="target">
    <div>Hello World</div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div>{{ msg }}</div>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
    <p>isOutside: {{ isOutside }}</p>
  </div>
  <HelloWorld></HelloWorld>
  <UserComponent></UserComponent>
  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
  <!-- airpline costom -->
  <div class="i-iconamoon:3d" style="color: red; font-size: 1.5rem"></div>
</template>

<script setup lang="ts">
const msg = ref('hello world')

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
