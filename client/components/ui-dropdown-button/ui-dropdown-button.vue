<template>
  <button
    v-aria-element
    class="ui-dropdown-button"
    :class="{'ui-dropdown-button--active': active}"
    @click="$emit('input', !active)"
  >
    <span
      class="ui-dropdown-button__label"
    >{{ label }}</span>

    <span
      class="ui-dropdown-button__icon"
      :class="{ 'ui-dropdown-button__icon--active': active }"
    >▾</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'UiDropdownButton',
  props: {
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-dropdown-button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    color: $color-neutrals-50;

    &--active {
      color: $color-blue-50
    }

    &__label {
      @include text-mini-caps;
    }

    &__icon {
      display: inline-block;
      vertical-align: center;

      &--active {
        transform: rotate(180deg);
      }
    }
  }
</style>
