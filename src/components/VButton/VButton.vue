<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import './VButton.scss'
import { computed } from 'vue'

interface Props {
  primary: boolean
}

const props = defineProps<Props>()

const classes = computed(() => {
  return {
    'v-button': true,
    'v-button--primary': props.primary,
  }
})
</script>
