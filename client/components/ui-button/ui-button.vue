<template>
  <button
    v-aria-element
    class="button"
    :class="[
      { 'button--primary': theme === uiButtonTheme.primary },
      { 'button--outline': theme === uiButtonTheme.outline },
      { 'button--text': theme === uiButtonTheme.text },
      { 'button--icon-text': theme === uiButtonTheme.iconText },
      { 'button--destructive': isDestructive },
      { 'button--disabled': isDisabled }
    ]"
    @click="$emit('clicked')"
  >
    <ui-svg
      v-if="theme === uiButtonTheme.iconText"
      class="button__svg"
      :svg-name="svgName"
    />
    <span class="button__label">{{ label }}</span>
  </button>
</template>

<script lang='ts'>
import Vue from 'vue'
import { UiButtonTheme } from './ui-button.interface'
import UiSvg from '~/components/ui-svg/ui-svg.vue'

export default Vue.extend({
  name: 'UiButton',
  components: { UiSvg },
  props: {
    label: {
      required: false,
      type: String
    },
    svgName: {
      required: false,
      type: String
    },
    theme: {
      required: false,
      type: String as () => UiButtonTheme,
      default: UiButtonTheme.primary
    },
    isDestructive: {
      required: false,
      type: Boolean,
      default: false
    },
    isDisabled: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      uiButtonTheme: UiButtonTheme
    }
  }
})
</script>

<style scoped lang="scss">
  .button {
    @include text-default;
    padding: 12px 8px;
    margin: 0;
    min-width: 108px;

    &__svg {
      width: rem-calc(16);
      height: rem-calc(16);
      vertical-align: middle;
      margin-right: 5px;

      @include from-width($laptop) {
        width: rem-calc(18);
        height: rem-calc(18);
        margin-right: 6px;
      };
    }

    &__label {
      vertical-align: center;
    }

    &--primary {
      color: $color-neutrals-40;
      background: $color-blue-50;
      border: 1px solid $color-blue-50;
      border-radius: 4px;

      &:hover {
        background-color: $color-blue-40;
      }
    }

    &--outline {
      color: $color-blue-50;
      background: $color-neutrals-40;
      border: 1px solid $color-blue-50;
      border-radius: 4px;

      &:hover {
        color: $color-neutrals-40;
        background-color: $color-blue-50;
      }
    }

    &--text {
      color: $color-blue-50;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 4px;

      &:hover {
        color: $color-blue-40;
      }
    }

    &--icon-text {
      color: $color-blue-50;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 4px;

      &:hover {
        color: $color-blue-40;
      }
    }

    &--destructive {
      &.button--primary {
        color: $color-neutrals-40;
        background: $color-red-50;
        border: 1px solid $color-red-50;
        border-radius: 4px;

        &:hover {
          background-color: $color-red-orange-40;
        }
      }

      &.button--outline {
        color: $color-red-50;
        background: $color-neutrals-40;
        border: 1px solid $color-red-50;
        border-radius: 4px;

        &:hover {
          color: $color-neutrals-40;
          background-color: $color-red-orange-50;
        }
      }

      &.button--text {
        color: $color-red-50;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 4px;

        &:hover {
          color: $color-red-orange-40;
        }
      }

      &.button--icon-text {
        color: $color-red-orange-50;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 4px;

        &:hover {
          color: $color-red-orange-40;
        }
      }
    }

    &--disabled {
      cursor: not-allowed;

      &.button__svg {
        fill: $color-neutrals-80;
      }

      &.button--primary, &.button--outline {
        color: $color-neutrals-80;
        background: $color-neutrals-50;
        border: 1px solid $color-neutrals-50;
        border-radius: 4px;

        &:hover {
          background-color: $color-neutrals-50;
        }
      }

      &.button--text, &.button--text-icon {
        color: $color-neutrals-60;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 4px;

        &:hover {
          background-color: transparent;
        }
      }
    }
  }
</style>
