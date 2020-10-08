<template>
  <label class="ui-checkbox">
    <input
      v-model="value_"
      class="ui-checkbox__input"
      data-testid="input"
      type="checkbox"
      v-bind="$attrs"
      @change="$emit('input', value_)"
    />
    <span
      data-testid="checkmark"
      class="ui-checkbox__checkmark"
      :class="[
        { 'ui-checkbox__checkmark--default': theme === UiCheckboxTheme.default },
        { 'ui-checkbox__checkmark--blue-boarder': theme === UiCheckboxTheme.blueBorder },
      ]"
    ></span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import { UiCheckboxTheme } from '~/components/ui-checkbox/ui-checkbox.interface'

export default Vue.extend({
  name: 'UiCheckbox',
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false
    },
    theme: {
      type: String as () => UiCheckboxTheme,
      required: false,
      default: UiCheckboxTheme.default
    }
  },
  data () {
    return {
      UiCheckboxTheme,
      value_: this.value
    }
  },
  watch: {
    value (value) {
      this.value_ = value
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-checkbox {
    display: inline-block;
    width: 14px;
    height: 14px;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* Create a custom checkbox */
    &__checkmark {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      height: 16px;
      width: 16px;
      border-radius: 2px;

      &--default {
        border: 1px solid $color-neutrals-90;
      }

      &--blue-boarder {
        border: 1px solid $color-blue-50;
      }
    }

    &__input {
      margin: 0;
      clip-path: polygon(0 0);

      &:checked ~ .ui-checkbox__checkmark:after {
        content: url(~assets/icons/tick--blue.svg);
        position: absolute;
      }

      &:checked ~ .ui-checkbox__checkmark {
        border: 1px solid $color-blue-50;
      }

      &:focus ~ .ui-checkbox__checkmark,
      &:active ~ .ui-checkbox__checkmark {
        border: 1px solid $color-blue-50;
      }

      &:disabled ~ .ui-checkbox__checkmark {
        cursor: not-allowed;
        border-color: $color-neutrals-70;
        background: rgba(0, 0, 0, 0.05);

        &:after {
          content: url(~assets/icons/tick--gray.svg);
        }
      }
    }
  }
</style>
