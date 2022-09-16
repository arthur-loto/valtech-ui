<script lang="ts" setup>
import { ref } from 'vue'
import { ImgPropsItf } from '../general-interfaces'

export interface BkImageProps {
  sizing?: string
  src: ImgPropsItf[]
  webpSrc?: ImgPropsItf[]
  alt?: string
}

const props = defineProps<BkImageProps>()

const size = ref()

function image(imgSrc: any) {
  let img = ''
  imgSrc.forEach((image: any) => {
    img += image.path + ' ' + image.width + ','
  })
  return `${img.slice(0, -1)}`
}

function resizedCallback(e: any) {
  size.value = e.detail.width + 'px'
}
</script>

<template>
  <picture :class="sizing">
    <source
      v-if="webpSrc"
      class="content"
      :sizes="size"
      :srcset="image(webpSrc)"
      type="image/webp"
    >
    <img
      v-if="src"
      :srcset="image(src)"
      loading="lazy"
      :alt="alt"
      :sizes="size"
      @brk-resized="resizedCallback"
    >
  </picture>
</template>

<style lang="scss" scoped>
picture {
  display: block;
  &:not(.vertical) {
    width: 100%;
  }
}
img {
  display: block;
  width: 100%;
}
.vertical {
  height: 100%;
  img {
    height: 100%;
    min-width: 1px;
    width: auto;
  }
}
.cover {
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.contain {
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
