import Mapper from '~/mixins/mapper.mixin'
import { mount } from '~~/tests/utils/jest-mounts'

describe('mapper mixin', () => {
  const Component = {
    render () {},
    title: 'Test',
    mixins: [Mapper]
  }

  // @ts-ignore
  const getComponent = (options = {}) => mount(Component, {
    ...options
  })

  test('is a Vue instance', () => {
    const wrapper: any = getComponent({})
    expect(wrapper.findComponent(Component).exists()).toBe(true)
  })

  test('is a Vue instance', () => {
    const wrapper: any = getComponent({})
    const ids = ['test1', 'test2']
    expect(wrapper.vm.idToTranslatedLabelMapper(ids)).toStrictEqual([
      { label: 'label__test1', id: 'test1' },
      { label: 'label__test2', id: 'test2' }
    ])
  })
})
