<template>
  <div class="ui-action-list">
    <ui-svg
      v-for="action in actions"
      :key="action.icon"
      class="ui-action-list__icon"
      :svg-name="action.icon"
      @clicked="onClick(action.name)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UiSvg from '~/components/ui-svg/ui-svg.vue'
import { UiActionItem } from '~/components/ui-action-list/ui-action-list.interface'

export default Vue.extend({
  name: 'UiActionList',
  components: { UiSvg },
  props: {
    actions: {
      type: Array as () => UiActionItem[],
      required: true
    }
  },
  methods: {
    onClick (action: string): void {
      this.$emit(action)
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-action-list {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__icon {
      margin-left: 16px;
    }
  }
</style>
