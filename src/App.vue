<template>
  <input type="number" v-model.number="foo" />
  <EmitEagerly v-bind="{ foo }" @update="update" />
</template>

<script>
import { ref } from 'vue'
import EmitEagerly from './components/EmitEagerly.vue'

export default {
  name: 'App',
  components: {
    EmitEagerly,
  },
  setup() {
    const foo = ref(0)

    function update(payload) {
      console.log(`'update' event emited with value of `, payload)
    }

    return { foo, update }
  },
}
</script>
