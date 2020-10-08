<template>
  <div
    class="ui-select"
    :class="[
      {'ui-select--full-width': isFullWidth}
    ]"
  >
    <ui-label
      v-if="label || description"
      :label="label"
      :for-id="label"
      :description="description"
      :is-required="isRequired"
      class="ui-select__label"
    />

    <select
      :id="label"
      v-aria-element
      class="ui-select__select"
      :class="[
        {'ui-select__select--placeholder': !value},
        {'ui-select__select--full-width': isFullWidth},
        {'ui-select__select--active': isActive && isTouched}
      ]"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value); isTouched = true"
    >
      <option
        v-if="isPlaceholder"
        class="ui-select__option ui-select__option--placeholder"
        :value="placeholderValue"
      >{{ placeholder_ }}</option>

      <option
        v-for="option in options"
        :key="option.value"
        class="ui-select__option"
        :value="option.value"
      >{{ option.label }}</option>
    </select>

    <div
      v-if="isInvalid"
      class="ui-select__foot-info"
    >
      <p
        v-if="isInvalid"
        class="ui-select__invalid-message"
      >
        <ui-svg
          class="ui-select__invalid-icon"
          svg-name="alert--red"
        />
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { UiSelectOption } from '~~/client/components/ui-select/ui-select.interface'
import UiSvg from '~/components/ui-svg/ui-svg.vue'
import UiLabel from '~/components/ui-label/ui-label.vue'

export default Vue.extend({
  name: 'UiSelect',
  components: { UiSvg, UiLabel },
  props: {
    label: {
      required: false,
      type: String
    },
    description: {
      required: false,
      type: String
    },
    value: {
      type: String,
      default: null
    },
    options: {
      type: Array as () => UiSelectOption[],
      required: true
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    isFullWidth: {
      type: Boolean,
      required: false
    },
    isPlaceholder: {
      type: Boolean,
      required: false,
      default: true
    },
    placeholderValue: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      required: false
    },
    isInvalid: {
      required: false,
      type: Boolean
    },
    errorMessage: {
      required: false,
      type: String
    }
  },
  data () {
    return {
      isTouched: false
    }
  },
  computed: {
    placeholder_ (): string {
      return this.placeholder || this.$t('label__select_option') as string
    },
    isActive (): boolean {
      return !!this.value && this.value.length > 0
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-select {

    &--full-width {
      width: 100%;
    }

    &__required-icon {
      color: $color-red-50;
    }

    &__select {
      @include text-default;
      box-sizing: border-box;
      position: relative;
      height: 44px;
      margin: 0;
      padding: 9px 34px 8px 16px;
      background-color: $color-neutrals-10;
      border: 1px solid $color-neutrals-80;
      border-radius: 4px;
      max-width: 100%;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-image: url(~assets/icons/dropdown_arrow.svg);
      background-repeat: no-repeat, repeat;
      background-position: right .7em top 50%, 0 0;
      background-size: .65em auto, 100%;

      &--placeholder {
        color: $color-neutrals-60;
        font-weight: normal;
      }

      &--full-width {
        width: 100%;
      }

      &--active {
        border-color: $color-blue-50
      }
    }

    &__foot-info {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
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
  }
</style>
