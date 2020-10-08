<template>
  <div
    class="ui-input"
    :class="{'ui-input--full-width': isFullWidth}"
  >
    <ui-label
      v-if="label || description"
      :label="label"
      :for-id="label"
      :description="description"
      :is-required="isRequired"
      class="ui-input__label"
    />

    <textarea
      v-if="isTextArea"
      :id="label"
      v-aria-element
      v-bind:value="value"
      v-bind="$attrs"
      data-testid="textarea"
      :rows="textAreaRows"
      class="ui-input__input ui-input--text-area"
      :class="[
        {'ui-input__input--disabled': isDisabled},
        {'ui-input__input--valid': !isInvalid && isValid},
        {'ui-input__input--invalid': isInvalid}
      ]"
      :placeholder="placeholder"
      :type="type"
      :disabled="isDisabled"
      v-on="inputListeners"
    />

    <input
      v-if="!isTextArea"
      :id="label"
      v-aria-element
      v-bind:value="value"
      v-bind="$attrs"
      data-testid="input"
      class="ui-input__input"
      :class="[
        {'ui-input__input--disabled': isDisabled},
        {'ui-input__input--valid': !isInvalid && !!value && value.length > 0},
        {'ui-input__input--invalid': isInvalid}
      ]"
      :placeholder="placeholder"
      :type="type"
      :disabled="isDisabled"
      v-on="inputListeners"
    />

    <div
      v-if="isInvalid || isCountLetters"
      class="ui-input__foot-info"
    >
      <p
        v-if="isInvalid"
        class="ui-input__invalid-message"
      >
        <ui-svg
          class="ui-input__invalid-icon"
          svg-name="alert--red"
        />
        {{ errorMessage }}
      </p>

      <p
        v-if="isCountLetters"
        class="ui-input__count-letters"
        :class="[
          {'ui-input__count-letters--single': !isInvalid},
          {'ui-input__count-letters--max-length': countLettersMax && inputLength > countLettersMax}
        ]"
      >
        <span
          class="ui-input__input-lengtht"
        >{{ inputLength }}</span>

        <span
          v-if="countLettersMax"
          class="ui-input__max-count-letters"
        >/{{ countLettersMax }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { UiInputTypes } from '~~/client/components/ui-input/ui-input.interface'
import UiSvg from '~~/client/components/ui-svg/ui-svg.vue'
import UiLabel from '~/components/ui-label/ui-label.vue'

export default Vue.extend({
  name: 'UiInput',
  components: { UiSvg, UiLabel },
  inheritAttrs: false,
  props: {
    label: {
      required: false,
      type: String
    },
    description: {
      required: false,
      type: String
    },
    type: {
      type: String as () => UiInputTypes,
      default: UiInputTypes.text
    },
    value: {
      type: String || Number,
      required: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    isCountLetters: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      required: false,
      type: Boolean
    },
    isInvalid: {
      required: false,
      type: Boolean
    },
    isValid: {
      required: false,
      type: Boolean
    },
    isFullWidth: {
      required: false,
      type: Boolean
    },
    isTextArea: {
      required: false,
      type: Boolean
    },
    errorMessage: {
      required: false,
      type: String
    },
    countLettersMax: {
      required: false,
      type: Number
    },
    textAreaRows: {
      required: false,
      type: Number,
      default: 5
    }
  },
  computed: {
    inputLength (): number {
      // @ts-ignore
      return this.value ? this.value.length : 0
    },

    inputListeners (): any {
      const vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          // @ts-ignore
          input: (event) => {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-input {
    width: 185px;

    &--full-width {
      width: 100%;
    }

    &__required-icon {
      color: $color-red-50;
    }

    &__input {
      width: 100%;
      height: 44px;
      padding:9px 16px 8px 16px;
      border: 1px solid $color-neutrals-80;
      border-radius: 4px;
      margin-top: 0;
      margin-bottom: 0;

      &::placeholder {
        color: $color-neutrals-60;
        font-weight: normal;
      }

      &:focus {
        border: 1px solid $color-blue-50;
      }

      &--valid {
        border-color: $color-blue-50;
      }

      &--invalid {
        border-color: $color-red-50;
      }

      &--disabled {
        border-color: $color-neutrals-70;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }

    &__foot-info {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 2px;
    }

    &__count-letters {
      align-self: flex-start;
      text-align: right;
      color: $color-neutrals-80;
      white-space: nowrap;
      margin-left: 10px;
      margin-top: 0;
      margin-bottom: 0;

      &--single {
        width: 100%;
        margin-left: 0;
      }

      &--max-length {
        color: $color-red-50;
      }
    }

    &__invalid-message {
      @include text-default;
      color: $color-red-50;
      line-height: rem-calc(18);
      margin-top: 0;
      margin-bottom: 0;

      @include from-width($laptop) {
        line-height: rem-calc(20);
      }
    }

    &__invalid-icon {
      height: rem-calc(14);
      width: rem-calc(14);
      vertical-align: middle;
    }

    &--text-area {
      height: auto;
    }
  }
</style>
