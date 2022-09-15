<template>
  <article
    class="brk-card-hero"
    :class="classes"
    ref="observedElement"
    @brk-resized="resizedCallback"
  >
    <div class="wrapper">
      <BrkTripleImages
        class="triple-image-height"
        v-bind="brkTripleImagesArgs"
      ></BrkTripleImages>

      <!-- secondary info -->
      <BrkCardJackpot v-if="secondaryInfo == 'BrkCardJackpot'" v-bind="brkSecondaryInfoArgs" :size="size"></BrkCardJackpot>

      
      <div class="main-info">
        <div class="content">
          <p class="pre-title" v-if="preTitle.length != 0">{{ preTitle }}</p>
          <h3 class="title">
            <a :href="link" class="title-link">{{ title }}</a>
          </h3>
          <p class="post-title">{{ postTitle }}</p>
        </div>
        <div class="btn-wrapper">
          <BrkButton
            v-bind="brkButtonArgs"
            :size="size"
            variant="tertiary"
          ></BrkButton>
        </div>
      </div>
    </div>

    <BrkCardNav v-if="showNav" v-bind="brkCardNavArgs"></BrkCardNav>
  </article>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import BrkButton from "../BrkButton/BrkButton.vue";
import BrkTripleImages from "../BrkTripleImages/BrkTripleImages.vue";
import BrkCardJackpot from "../BrkJackpot/BrkCardJackpot.vue";
import BrkCardNav from "../BrkCardNav/BrkCardNav.vue";
import { ro } from "../../helpers/ComponentResize";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  preTitle: {
    type: String,
  },
  postTitle: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  secondaryInfo: {
    type: String,
  },
  showNav: {
    type: Boolean,
  },
  brkButtonArgs: {
    type: Object,
    required: true,
  },
  brkTripleImagesArgs: {
    type: Object,
    required: true,
  },
  brkSecondaryInfoArgs: {
    type: Object,
  },
  brkCardNavArgs: {
    type: Object,
  },
});

const size = ref('sm');
const observedElement = ref();

const classes = computed(() => {
  let classes = size.value;
  if (props.secondaryInfo && props.secondaryInfo.length > 0) {
    console.log('debug secondaryInfo', props.secondaryInfo);
    classes += " has-secondary-info";
  }
  if (!props.preTitle) {
    classes += " no-pre-title";
  }
  return classes;
});



function resizedCallback(e) {
  if (e.detail.width > 780) {
    size.value = "xl";
  } else if (e.detail.width > 630) {
    size.value = "lg";
  } else if (e.detail.width > 450) {
    size.value = "md";
  } else {
    size.value = "sm";
  }
}

onMounted(() => {
  ro.observe(observedElement.value);
})
</script>

<style lang="scss" scoped>
.brk-card-hero {
  /* Tokens temporaires car manquants dans le fichier */
  --brk-card-hero-sm-image-height: 216px;
  --brk-card-hero-md-image-height: 330px;
  --brk-card-hero-lg-image-height: 342px;
  --brk-card-hero-xl-image-height: 392px;

  /** Tokens dépendants des breakpoints */
  $breakpoints: (sm, md, lg, xl);
  @each $bp in $breakpoints {
    &.#{$bp} {
      --content-gap: var(--brk-card-hero-#{$bp}-content-gap);
      --card-padding: var(--brk-card-hero-#{$bp}-padding-vertical)
        var(--brk-card-hero-#{$bp}-padding-horizontal);
      --image-height: var(--brk-card-hero-#{$bp}-image-height);
      --post-title-line-height: var(
        --brk-card-hero-#{$bp}-subheading-line-height
      );
      --post-title-font-size: var(--brk-card-hero-#{$bp}-subheading-font-size);
      --post-title-letter-spacing: var(
        --brk-card-hero-#{$bp}-subheading-letter-spacing
      );
      --post-title-paragraph-spacing: var(
        --brk-card-hero-#{$bp}-subheading-paragraph-spacing
      );
      --secondary-info-height: var(--brk-jackpot-hero-#{$bp}-height);
      --secondary-info-padding: 0
        var(--brk-card-hero-#{$bp}-padding-horizontal);
      --title-line-height: var(--brk-card-hero-#{$bp}-heading-line-height);
      --title-font-size: var(--brk-card-hero-#{$bp}-heading-font-size);
      --title-letter-spacing: var(
        --brk-card-hero-#{$bp}-heading-letter-spacing
      );
      --title-paragraph-spacing: var(
        --brk-card-hero-#{$bp}-heading-paragraph-spacing
      );
      --title-margin: var(--brk-card-hero-#{$bp}-heading-margin-vertical)
        0; // Horizontal n'est pas dans les tokens
    }
  }

  /* Définition des variables selon les tokens */
  --background-color: var(--brk-card-hero-background-color-standard);
  --body-letter-spacing: var(--brk-card-hero-sm-body-letter-spacing);
  --body-line-height: var(--brk-card-hero-sm-body-line-height);
  --border: var(--brk-card-hero-border-width) solid
    var(--brk-card-hero-border-color-standard);
  --border-radius: var(--brk-card-hero-border-radius);
  --box-shadow: var(--brk-card-hero-box-shadow-default-standard-x)
    var(--brk-card-hero-box-shadow-default-standard-y)
    var(--brk-card-hero-box-shadow-default-standard-blur)
    var(--brk-card-hero-box-shadow-default-standard-spread)
    var(--brk-card-hero-box-shadow-default-standard-color);
  /** Les valeurs dans decisions-jel-variables.css n'ont pas de "px" donc ne fonctionnent pas --box-shadow-hover: var(--brk-card-hero-box-shadow-default-hover-x) var(--brk-card-hero-box-shadow-default-hover-y) var(--brk-card-hero-box-shadow-default-hover-blur) var(--brk-card-hero-box-shadow-default-hover-spread) var(--brk-card-hero-box-shadow-default-hover-color);*/
  --box-shadow-hover: var(--brk-card-hero-box-shadow-default-hover-x) 7px 29px
    var(--brk-card-hero-box-shadow-default-hover-spread)
    var(--brk-card-hero-box-shadow-default-hover-color);
  --box-shadow-active: var(--brk-card-hero-box-shadow-default-active-x) 2px 8px
    var(--brk-card-hero-box-shadow-default-active-spread)
    var(--brk-card-hero-box-shadow-default-active-color);
  --btn-wrapper-margin: var(--pre-title-line-height) 0 0 var(--content-gap);
  --color: var(--brk-card-hero-body-font-color-standard);
  --font-weight: var(--brk-card-hero-sm-body-font-weight);
  --outline: var(--brk-card-hero-border-width) solid
    var(--brk-card-hero-border-color-standard); /* Ne se trouvent pas dans les tokens */
  --outline-offset: 0px; /* Ne se trouvent pas dans les tokens */
  --post-title-font-color: var(--brk-card-hero-subheading-font-color-standard);
  --post-title-font-family: var(--brk-card-hero-sm-subheading-font-family);
  --post-title-text-case: var(--brk-card-hero-sm-subheading-text-case);
  --post-title-text-decoration: var(
    --brk-card-hero-sm-subheading-text-decoration
  );
  --post-title-font-weight: var(--brk-card-hero-sm-subheading-font-weight);
  --pre-title-font-size: 12px; /* Ne se trouvent pas dans les tokens */
  --pre-title-line-height: 14px; /* Ne se trouvent pas dans les tokens */

  --title-color: var(--brk-card-hero-heading-font-color-standard);
  --title-font-family: var(--brk-card-hero-sm-heading-font-family);
  --title-font-weight: var(--brk-card-hero-sm-heading-font-weight);
  --title-text-case: var(--brk-card-hero-sm-heading-text-case);
  --title-text-decoration: var(--brk-card-hero-sm-heading-text-decoration);
  --text-decoration: var(--brk-card-hero-sm-body-text-decoration);
  --text-transform: var(--brk-card-hero-sm-body-text-case);

  /* Style */
  background-color: var(--background-color);
  color: var(--color);
  font-family: var(--brk-card-hero-sm-body-font-family);
  font-size: var(--body-font-size);
  font-weight: var(--font-weight);
  height: 100%;
  letter-spacing: var(--body-letter-spacing);
  line-height: var(--body-line-height);
  position: relative;
  text-decoration: var(--text-decoration);
  text-transform: var(--text-transform);

  .wrapper {
    background-color: var(--background-color);
    border: var(--border);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    height: 100%;
    outline: var(--outline);
    outline-offset: var(--outline-offset);
    overflow: hidden;
    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
    &:active {
      box-shadow: var(--box-shadow-active);
    }
  }

  .triple-image-height {
    height: var(--image-height);
  }
  &.has-secondary-info {
    .triple-image-height {
      height: calc(var(--image-height) - var(--secondary-info-height));
    }
  }

  .main-info {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--card-padding);
  }

  .pre-title {
    font-size: var(--pre-title-font-size);
    display: -webkit-box;
    line-height: var(--pre-title-line-height);
    margin: 0;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .title {
    color: var(--title-color);
    display: -webkit-box;
    font-family: var(--title-font-family);
    font-size: var(--title-font-size);
    font-weight: var(--title-font-weight);
    letter-spacing: var(--title-letter-spacing);
    line-height: var(--title-line-height);
    margin: var(--title-margin);
    overflow: hidden;
    text-transform: var(--title-text-case);
    text-decoration: var(--title-text-decoration);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  &.no-pre-title {
    .title {
      padding-top: var(--pre-title-line-height);
    }
  }

  .title-link {
    color: var(--title-color);
    outline: 0;
    text-decoration: var(--title-text-decoration);
    &::after {
      border-radius: var(--border-radius);
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
    &:focus-visible::after {
      outline: var(--outline);
      outline-offset: var(--outline-offset);
    }
  }

  .post-title {
    letter-spacing: var(--post-title-letter-spacing);
    line-height: var(--post-title-line-height);
    color: var(--post-title-font-color);
    display: -webkit-box;
    font-family: var(--post-title-font-family);
    font-size: var(--post-title-font-size);
    font-weight: var(--post-title-font-weight);
    margin: 0;
    overflow: hidden;
    text-transform: var(--post-title-text-case);
    text-decoration: var(--post-title-text-decoration);
    //white-space: nowrap;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .btn-wrapper {
    margin: var(--btn-wrapper-margin);
    position: relative; /* Pour s'assurer que le bouton est par-dessus le lien de la carte */
  }
}
</style>