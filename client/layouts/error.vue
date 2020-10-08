<template>
  <div class="not-found">
    <span
      v-if="error.statusCode"
      class="not-found__status-code"
    >{{ error.statusCode }}</span>
    <span
      class="not-found__message"
    >{{ error.message }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Error',
  layout: 'default',
  props: ['error']
})
</script>
