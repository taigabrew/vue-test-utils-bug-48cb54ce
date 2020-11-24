<template>
  <div>Stub</div>
</template>

<script>
import { watch } from 'vue'

export default {
  name: 'EmitEagerly',
  props: {
    foo: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update'],
  setup(props, { emit }) {
    watch(
      () => props.foo,
      (val) => {
        emit('update', val)
      },
      { immediate: true }
    )
  },
}
</script>
