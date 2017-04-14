import CodeMirror from 'codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/addon/edit/matchbrackets.js'
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      defaultOptions: {
        mode: 'text/html',
        smartIndent: true, // 上下文缩进
        lineNumbers: true, // 行数
        readOnly: false, // 只读
        tabSize: 2,
        theme: 'monokai'
      }
    }
  },
  mounted () {
    let options = Object.assign(this.defaultOptions, this.options)
    this.editor = CodeMirror(this.$el, options)
    this.editor.setValue(this.value)
    this.editor.on('change', (cm) => {
      this.content = cm.getValue()
      if (this.$emit) {
        this.$emit('change', this.content)
        this.$emit('input', this.content)
      }
    })
  },
  render (h) {
    return (
      <div></div>
    )
  }
}
