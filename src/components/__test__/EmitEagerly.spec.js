import { shallowMount } from '@vue/test-utils'
import { nextTick } from 'vue'
import EmitEagerly from '../EmitEagerly.vue'

describe(`EmitEagerly`, () => {
  it(`emits 'update'`, async () => {
    const wrapper = shallowMount(EmitEagerly)
    await nextTick()

    expect(wrapper.emitted().update[0][0]).toBe(0)

    await wrapper.setProps({ foo: 2 })

    expect(wrapper.emitted().update[1][0]).toBe(2)
  })
})
