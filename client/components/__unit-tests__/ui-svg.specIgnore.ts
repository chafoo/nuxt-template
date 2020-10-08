import { shallowMount } from '~~/tests/utils/jest-mounts'

const wrapper = async (iconName = 'dummy') => {
  const dummyIcon = await import(`~/assets/icons/${iconName}.svg?inline`)
  return shallowMount(dummyIcon)
}

describe('ui-svg', () => {
  test('is a Vue instance', async () => {
    expect(await wrapper).toBeTruthy()
  })
})
