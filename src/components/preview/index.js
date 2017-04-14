/* eslint-disable no-eval */
import { transform, registerPreset } from 'babel-standalone'
// babel-standalone 里没有babel-preset-vue 必须手动注册下
registerPreset('vue', require('babel-preset-vue'))
import Vue from 'vue'
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    scope: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    compileCode () {
      const code = `
(function (Vue) {
  new Vue({
    el: '#preview',
    render: h => (
      <div id="preview">
        ${this.value}
      </div>
      )
  })
})
`
      return transform(code, {presets: ['es2015', 'stage-2', 'vue']}).code
    }
  },
  mounted () {
    this.executeCode()
  },
  methods: {
    executeCode () {
      try {
        eval(this.compileCode)(Vue)
      } catch (e) {

      }
    }
  },
  watch: {
    value () {
      this.executeCode()
    }
  },
  render (h) {
    return (
      <div id="preview"></div>
    )
  }
}
