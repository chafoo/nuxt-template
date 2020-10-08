import { shallowMount } from '~~/tests/utils/jest-mounts'
import UiButton from '~/components/ui-button/ui-button.vue'
import { UiButtonTheme } from '~~/client/components/ui-button//ui-button.interface'

const wrapper = shallowMount(UiButton)

describe('ui-button', () => {
  test('is a Vue instance', () => {
    expect(wrapper.findComponent(UiButton).exists()).toBe(true)
  })

  test('is primary theme', () => {
    expect(wrapper.classes('button--primary')).toBe(true)
  })

  test('is outline theme', async () => {
    await wrapper.setProps({ theme: UiButtonTheme.outline })
    expect(wrapper.classes('button--outline')).toBe(true)
  })

  test('is text theme', async () => {
    await wrapper.setProps({ theme: UiButtonTheme.text })
    expect(wrapper.classes('button--text')).toBe(true)
  })

  test('is icon-text theme', async () => {
    await wrapper.setProps({
      theme: UiButtonTheme.iconText,
      svgName: 'preview'
    })
    expect(wrapper.classes('button--icon-text')).toBe(true)
  })

  test('is destructive theme', async () => {
    await wrapper.setProps({ isDestructive: true })
    expect(wrapper.classes('button--destructive')).toBe(true)
  })

  test('is disabled theme', async () => {
    await wrapper.setProps({ isDisabled: true })
    expect(wrapper.classes('button--disabled')).toBe(true)
  })
})
