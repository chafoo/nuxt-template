<template>
  <div class="ui-select-list">
    <div
      v-for="item in items"
      :key="item.id"
      class="ui-select-list__item"
    >
      <label
        class="ui-select-list__label"
      >{{ item.label }}</label>

      <ui-select
        v-model="inputs[item.id]"
        class="ui-select-list__select"
        :placeholder="item.placeholder"
        :options="item.options"
        :is-full-width="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UiSelect from '~/components/ui-select/ui-select.vue'
import { UiSelectListItem } from '~/components/ui-select-list/ui-select-list.interface'
import { IndexObject } from '~/utils/common.interface'

export default Vue.extend({
  name: 'UiSelectList',
  components: { UiSelect },
  props: {
    items: {
      type: Array as () => UiSelectListItem[],
      required: true
    }
  },
  data () {
    return {
      inputs: {} as IndexObject
    }
  },
  watch: {
    inputs: {
      handler (inputs) {
        this.$emit('input', this.completeInputs(inputs))
      },
      deep: true
    }
  },
  methods: {
    completeInputs (inputs: any) {
      const _inputs = Object.assign({}, inputs)

      if (Object.keys(inputs).length !== this.items.length) {
        this.items.forEach(({ id }) => {
          if (!inputs[id]) {
            _inputs[id] = null
          }
        })
      }

      return _inputs
    }
  }
})
</script>

<style scoped lang="scss">
  .ui-select-list {
    display: flex;
    flex-direction: column;

    &__item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 16px;
    }

    &__label {
      @include text-mini-caps;
    }

    &__select {
      max-width: 150px;

      @include from-width($tablet) {
        max-width: 220px;
      }
    }
  }
</style>
