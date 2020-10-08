import { mount } from '~~/tests/utils/jest-mounts'
// @ts-ignore
import UiCheckboxList from '~/components/ui-checkbox-list/ui-checkbox-list.vue'

describe('ui-checkbox-list', () => {
  const getChecklistItem = (prefix: string) => ({ label: `test${prefix}`, id: `test${prefix}` })
  const getComponent = (options = {}) => mount(UiCheckboxList, {
    propsData: {
      items: [
        getChecklistItem('1'),
        getChecklistItem('2'),
        getChecklistItem('3')
      ]
    },
    ...options
  })

  test('is a Vue instance', () => {
    const wrapper: any = getComponent({})
    expect(wrapper.findComponent(UiCheckboxList).exists()).toBe(true)
  })

  test('on select item - none selected before', () => {
    const item = 'test'
    const wrapper: any = getComponent({})
    wrapper.setData({ selectedItems: [`${item}1`] })
    wrapper.vm.onSelectItem(item)
    expect(wrapper.vm.selectedItems).toStrictEqual([`${item}1`, item])
    expect(wrapper.vm.$emit).toBeCalledWith('input', [`${item}1`, item])
  })

  test('on select item - some selected before', () => {
    const item = 'test'
    const wrapper: any = getComponent({})
    wrapper.vm.onSelectItem(item)
    expect(wrapper.vm.selectedItems).toStrictEqual([item])
    expect(wrapper.vm.$emit).toBeCalledWith('input', [item])
  })

  test('on unselect item - one selected', () => {
    const item = 'test'
    const wrapper: any = getComponent({})
    wrapper.setData({ selectedItems: [item] })
    wrapper.vm.onSelectItem(item)
    expect(wrapper.vm.selectedItems).toStrictEqual([])
    expect(wrapper.vm.$emit).toBeCalledWith('input', [])
  })

  test('on unselect item - multiple selected', () => {
    const item = 'test'
    const wrapper: any = getComponent({})
    wrapper.setData({ selectedItems: [`${item}1`, item] })
    wrapper.vm.onSelectItem(item)
    expect(wrapper.vm.selectedItems).toStrictEqual([`${item}1`])
    expect(wrapper.vm.$emit).toBeCalledWith('input', [`${item}1`])
  })
})
