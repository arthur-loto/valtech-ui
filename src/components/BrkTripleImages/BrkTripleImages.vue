<script lang="ts" setup>
import { ImgPropsItf } from '../general-interfaces'

export interface TripleImagesProps {
  bg: ImgPropsItf[]
  bgWebp: ImgPropsItf[]
  character: ImgPropsItf[]
  characterWebp: ImgPropsItf[]
  logo: ImgPropsItf[]
  logoWebp: ImgPropsItf[]
  alt: string
  positionChr: string
  link: string
}

const props = defineProps<TripleImagesProps>()
</script>

<template>
  <figure class="triple-image">
    <brk-image
      v-if="bg"
      v-bind="{
        src: bg,
        webpSrc: bgWebp,
      }"
      :alt="alt"
      sizing="cover"
      class="bg"
    />
    <brk-image
      v-if="character"
      v-bind="{
        src: character,
        webpSrc: characterWebp,
      }"
      sizing="vertical"
      class="character"
      :class="positionChr"
      alt=""
    />
    <brk-image
      v-if="logo"
      v-bind="{
        src: logo,
        webpSrc: logoWebp,
      }"
      sizing="contain"
      class="logo"
      alt=""
    />
  </figure>
</template>

<style lang="scss" scoped>
.triple-image {
  height: 200px;
  margin: 0;
  overflow: hidden;
  position: relative;
  width: 100%;

  a {
    display: inline-block;
  }
  .bg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .character {
    height: 100%;
    position: absolute;
    top: 0;

    &.right {
      right: 0;
    }

    &.left {
      left: 0;
    }

    &.center {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .logo {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
}
</style>
