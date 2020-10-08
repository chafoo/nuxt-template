<template>
  <div class="ui-label">
    <label
      :for="forId"
      class="ui-label__label-wrapper"
    >
      <span class="ui-label__label">
        {{ label }}
      </span>
      <span
        v-if="isRequired"
        class="ui-label__required-symbol"
      >*</span>
    </label>

    <p
      v-if="description"
      class="ui-label__description"
    >{{ description }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UiLabel',
  props: {
    label: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    forId: {
      type: String,
      required: false
    },
    isRequired: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-label {
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;

    &__label {
      @include text-mini-caps;
      margin: 0 0 4px 0;
    }

    &__required-symbol {
      @include text-default;
      color: $color-red-50;
      margin-left: -4px;
    }

    &__description {
      color: $color-neutrals-80;
      margin-top: 0;
      margin-bottom: 8px;
    }
  }
</style>
