<template>
  <div>
    <p>ChildComponent</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script setup lang="ts">
// const emit = defineEmits<
//   SE<{
//     clickCount(num: number): void
//   }>
// >()

const emit = defineEmits<{
  (e: 'clickCount', num: number): void
}>()

const handleClick = () => {
  const num = ref(0)
  console.log('click')
  emit('clickCount', ++num.value)
}
</script>

<style scoped></style>
