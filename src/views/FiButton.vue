<template lang="pug">
  .example
    .item
      .title 默认
      .row
        fi-button(@click="onclick")
          span 提交
    .item
      .title 大小
      .row
        fi-button(:size="12")
          span 提交
        fi-button(:size="14")
          span 提交
        fi-button(:size="18")
          span 提交
    .item
      .title 图标
      .row
        fi-button(:size="12")
          i.icon.iconfont.icon-wechat(slot="icon")
          span 提交
        fi-button(:size="14")
          span 提交
          i.icon.iconfont.icon-wechat(slot="icon-right")
    .item
      .title 固定大小
      .row
        fi-button(:width="150", :height="50")
          span 发送验证码
        fi-button(:width="200", :height="50")
          span 发送验证码
    .item
      .title 颜色
      .row
        fi-button(background="#2d8cf0" color="#fff" hoverBackground="#57a3f3" hoverColor="#fff")
          span 成功
        fi-button(background="rgba(0, 0, 0, 0)" hoverBackground="rgba(0, 0, 0, 0)" borderColor="#ccc")
          span 幽灵
    .item
      .title 圆角
      .row
        fi-button(:borderRadius="0")
          span 直角
        fi-button(:borderRadius="1000")
          span 胶囊
    .item
      .title 保持激活
      .row
        fi-button(:width="100", :activable="true", activeBackground="#bbb" @click="onclick")
          span(slot="active-label") 取消 
          span 点赞
        fi-button(:width="100", :activable="true", :unactivable="false")
          span(slot="active-label") 不可点击 
          span 只点一次
        fi-button(:width="100", :activable="true", :unactivable="false", :activeTime="2000")
          span(slot="active-label") 2s后可点击 
          span 超时重置
    .item
      .title 长按钮
      .row
        fi-button(:block="true" :borderRadius="0")
          span 确定


</template>

<script>
import FiButton from '../../FiButton'
export default {
  components: {
    FiButton
  },
  methods: {
    onclick (active) {
      console.log(active)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.example {
  .item {
    margin-bottom: 15px;
    .title {
      margin-bottom: 10px;
    }
  }

}
</style>
