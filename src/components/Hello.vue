<template>
  <div class="hello">
    <editor v-model="code"></editor>
    <preview v-model="code" debounce="500"></preview>
  </div>
</template>

<script>
import Editor from '@/components/editor'
import Preview from '@/components/preview'
export default {
  name: 'hello',
  components: {
    Editor,
    Preview
  },
  data () {
    return {
      code: `
<cq-button class="cq-raised cq-primary">Hello</cq-button>
<cq-button class="cq-raised cq-warn">Hello</cq-button>
`
    }
  }
}
</script>
