<template lang="pug">
  .app
    // fi-histogram(name="水压", unit="MPa", :segments="4", :step="2", :value="1")
    fi-button(:activable="true", :size="14", :width="200", :height="50", :unactivable="false", :activeTime="2000" @click="onclicked", :borderRadius="0")
      i.icon.iconfont.icon-wechat(slot="icon")
      span(slot="active-label") 已发送
      span 发送验证码
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
