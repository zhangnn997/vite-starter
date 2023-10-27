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
</template>

<script setup lang="ts">
const msg = ref('hello world')

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
