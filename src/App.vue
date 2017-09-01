<template lang="pug">
  .app
    // fi-histogram(name="水压", unit="MPa", :segments="4", :step="2", :value="1")
    router-view
</template>

<script>
import FiHistogram from '../FiHistogram'
import FiButton from '../FiButton'
export default {
  name: 'app',
  components: {
    FiHistogram,
    FiButton
  },
  methods: {
    onclicked (active) {
      console.log(active)
    }
  }
}
</script>

<style>
</style>
