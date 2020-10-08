<template>
  <div
    v-if="isOpen"
    class="ui-modal"
  >
    <div
      v-click-outside="onClose"
      class="ui-modal__default"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import vClickOutside from 'v-click-outside'
import { UiModalThemes } from '~/components/ui-modal/ui-modal.interface'

export default Vue.extend({
  name: 'UiModal',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    theme: {
      type: String,
      required: false,
      default: () => UiModalThemes.default
    }
  },
  data () {
    return {
      UiModalThemes,
      isOpen: false
    }
  },
  methods: {
    onClose () {
      this.isOpen = false
    },

    // Use $refs on the parent to call open method directly.
    // Example Parent: this.$refs.modal.onOpen()
    onOpen () {
      this.isOpen = true
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;

    &__default {
      @include main-frame;
      display: flex;
      justify-content: center;
    }
  }
</style>
