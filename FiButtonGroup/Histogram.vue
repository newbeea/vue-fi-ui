<template lang="pug">
  .histogram
    .chart
      .pillar
        .background
          .inner(:style="{'height': height}")
      .lines
        .line-wrapper(v-for="i in segments")
          .line
      .numbers
        .number(v-for="i in segments")
          .inner {{((segments - i + 1) * step).toFixed(2)}}
    .label {{name}} {{value}}{{unit}}
</template>

<script>
export default {
  components: {
  },
  props: {
    name: String,
    unit: String,
    value: Number,
    segments: Number,
    step: Number
  },
  computed: {
    height () {
      return this.value / (this.segments * this.step) * 100 + '%'
    }
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .histogram {
    width: 100%;
    padding: 10px; 
    .chart {
      width: 100%;
      max-width: 60px;
      margin: auto;
      font-size: 12px;
      padding: 10px 0;
      height: 150px;
      display: flex;
      justify-content: space-between;
      .pillar {
        width: 100%;
        .background {
          background: #ddd;
          width: 4px;
          height: 100%;
          margin: auto;
          border-radius: 2px;
          position: relative;
          .inner {
            transition: height 1s;
            width: 100%;
            height: 60%;
            border-radius: 2px;
            background: #04BE02;
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
      }
      .lines {
        width: 20px;
        display: flex;
        flex-direction: column;
        .line-wrapper {
          height: 100%;
          .line {
            height: 1px;
            border-bottom: 1px solid #000;
          }
        }
      }
      .numbers {
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        .number {
          height: 100%;
          .inner {
            margin-top: -7px;
          }
        }
      }
    }
    .label {
      font-size: 14px;
      text-align: center;
    }
  }
</style>
