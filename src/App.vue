<template>
  <div class="sem sem-context sem-reset">
    <h1>{{ header }}</h1>
    <p>{{ message }}</p>
    <button @click="clickHandler">Click Me</button>
    <DeepChild />
    <GoodChildBadDependency />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DeepChild from './DeepChild.vue'
import GoodChildBadDependency from './GoodChildBadDependency.vue'

defineProps<{
  message: string
}>()
const header = 'Hello world!'
const counter = ref(0)
const clickHandler = () => {
  PDR.prompt.alert(`The button has been clicked ${++counter.value} times`)
}
</script>
