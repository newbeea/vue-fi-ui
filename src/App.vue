<template lang="pug">
  .app
    histogram(name="水压", unit="MPa", :segments="4", :step="2", :value="1")
</template>

<script>
import Histogram from '../Histogram'

export default {
  name: 'app',
  components: {
    Histogram
  }
}
</script>

<style>
</style>
