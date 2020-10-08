<template>
  <component
    :is="dynamicSvg"
    v-if="dynamicSvg"
    @click="$emit('clicked')"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { log as DevLog } from '~~/client/utils/dev.service'

export default Vue.extend({
  name: 'UiSvg',
  props: {
    svgName: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      dynamicSvg: null as any
    }
  },
  created () {
    const svgName = this.svgName || 'dummy'

    try {
      this.dynamicSvg = async () => await import(`~/assets/icons/${svgName}.svg?inline.vue`)
    } catch (error) {
      this.dynamicSvg = async () => await import('~/assets/icons/dummy.svg?inline.vue')
      // @ts-ignore
      this.$sentry.captureException(error)
      DevLog(error, this.svgName)
    }
  }
})
</script>
