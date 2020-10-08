<template>
  <div class="ui-empty-state">
    <ui-svg
      class="ui-empty-state__icon"
      :svg-name="icon"
    />

    <p
      class="ui-empty-state__headline"
    >{{ headline }}</p>

    <p
      class="ui-empty-state__text"
    >{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UiSvg from '~/components/ui-svg/ui-svg.vue'

export default Vue.extend({
  name: 'UiEmptyState',
  components: { UiSvg },
  props: {
    icon: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
  .ui-empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__icon {
      margin-top: -12px;
      margin-bottom: 4px;
    }

    &__headline  {
      @include small-headline;
      margin-top: 0;
      margin-bottom: 4px;
    }

    &__text {
      width: 100%;
      margin: 0;
      text-align: left;

      @include from-width($phablet) {
        text-align: center;
      }
    }
  }
</style>
