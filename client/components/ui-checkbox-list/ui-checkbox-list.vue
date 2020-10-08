<template>
  <ul class="ui-checkbox-list">
    <li
      v-for="(item, i) in items"
      :key="i"
      class="ui-checkbox-list__item"
    >
      <ui-checkbox
        :value="selectedItems.includes(item.id)"
        class="ui-checkbox-list__checkbox"
        @input="onSelectItem(item.id)"
      />
      <label class="ui-checkbox-list__label">
        {{ item.label }}
      </label>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import UiCheckbox from '~/components/ui-checkbox/ui-checkbox.vue'
import { CheckboxListItem } from '~/components/ui-checkbox-list/ui-checkbox-list.interface'

export default Vue.extend({
  name: 'UiCheckboxList',
  components: { UiCheckbox },
  props: {
    items: {
      type: Array as () => CheckboxListItem[],
      required: true
    },
    initialSelection: {
      type: Array as () => string[],
      required: false,
      default: []
    }
  },
  data () {
    return {
      selectedItems: this.initialSelection
    }
  },
  methods: {
    onSelectItem (itemId: string) {
      const selectedItemIndex = this.selectedItems.findIndex(selectedItemId => selectedItemId === itemId)
      if (selectedItemIndex === -1) {
        this.selectedItems.push(itemId)
      } else {
        this.selectedItems.splice(selectedItemIndex, 1)
      }
      this.$emit('input', this.selectedItems)
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-checkbox-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &__item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;

      @include from-width($phablet) {
        width: 50%;
      }

      @include from-width($laptop) {
        width: 33%;
      }
    }

    &__checkbox {
      margin-right: 8px;
    }
  }
</style>
