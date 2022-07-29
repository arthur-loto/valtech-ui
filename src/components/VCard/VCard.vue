<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import './VCard.scss'
import { computed } from 'vue'

interface Props {
  primary: boolean
}

const props = defineProps<Props>()

const classes = computed(() => {
  return {
    'v-card': true,
  }
})
</script>
