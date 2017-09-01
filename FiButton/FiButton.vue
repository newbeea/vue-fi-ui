<template lang="pug">
  button.fi-button(@click="handleClick" @mouseover="hover = true", @mouseleave="hover = false", :style="buttonStyle", :disabled="disable")
    slot.fi-icon(name="icon")
    slot(v-if="!active")
    slot(v-if="active" name="active-label")
    slot.fi-icon(name="icon-right")
</template>

<script>
export default {
  components: {
  },
  props: {
    activable: {
      type: Boolean,
      default: false
    },
    unactivable: {
      type: Boolean,
      default: true
    },
    activeTime: Number,
    size: {
      type: Number,
      default: 14
    },
    block: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    background: {
      type: String,
      default: '#e0e1e2'
    },
    hoverBackground: {
      type: String,
      default: '#cacbcd'
    },
    activeBackground: {
      type: String,
      default: '#cacbcd'
    },
    color: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6)'
    },
    hoverColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.8)'
    },
    activeColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.8)'
    },
    borderColor: String,
    borderWidth: {
      type: Number,
      default: 1
    },
    borderRadius: Number,
    disabled: Boolean
  },
  computed: {
    disable () {
      return this.disabled || !this.unactivable && this.active
    },
    buttonStyle () {
      var style = {}
      style['font-size'] = this.size + 'px'
      if (!this.hover) {
        style['background'] = this.background
        style['color'] = this.color
      } else {
        style['background'] = this.hoverBackground
        style['color'] = this.hoverColor
      }
      if (this.active) {
        style['background'] = this.activeBackground
        style['color'] = this.activeColor
      }
      if (this.width) {
        style['width'] = this.width + 'px'
      }
      if (this.block) {
        style['width'] = '100%'
      }
      if (this.height) {
        style['height'] = this.height + 'px'
      }
      if (this.borderRadius !== undefined) {
        style['border-radius'] = this.borderRadius + 'px'
      }
      style['border-width'] = this.borderWidth + 'px'
      if (this.borderColor !== undefined) {
        style['border-color'] = this.borderColor
        style['border-style'] = 'solid'
      }
      return style
    }
  },
  methods: {
    handleClick (event) {
      if (!this.disable) {
        this.$emit('click', this.active)
      }
      if (this.activable) {
        if (!this.active) {
          this.active = true
          if (this.activeTime) {
            clearTimeout(this.activeTimeout)
            this.activeTimeout = setTimeout(() => {
              this.active = false
            }, this.activeTime)
          }
        } else if (this.unactivable) {
          this.active = false
        }
      }
    }
  },
  data () {
    return {
      hover: false,
      active: false,
      activeTimeout: undefined
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .fi-button {
    font-size: 14px;
    overflow: visible;
    text-transform: none;
    appearance: none;
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: none;
    border: none;
    vertical-align: baseline;
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    margin: 0em 0.4em 0.4em 0em;
    padding: 0.6em 1em;
    text-transform: none;
    text-shadow: none;
    font-weight: bold;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: 0.28571429rem;
    color: rgba(0, 0, 0, 0.6);
    background: #e0e1e2;
    user-select: none;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    &[disabled] {
      opacity: 0.45;
      cursor: not-allowed;
    }
    &:hover {
      background-color: #cacbcd;
      background-image: none;
      color: rgba(0, 0, 0, 0.8);
    }
    .iconfont {
      font-size: 1em;
      margin: 0 4px;
    }
  }
</style>
