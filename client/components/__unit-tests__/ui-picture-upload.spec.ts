import { shallowMount } from '~~/tests/utils/jest-mounts'
import { getStore } from '~~/tests/utils/jest-store.service'
import UiPictureUpload from '~/components/ui-picture-upload/ui-picture-upload.vue'

describe('ui-picture-upload', () => {
  const getComponent = (options = {}) => {
    return shallowMount(UiPictureUpload, {
      store: getStore('recipe-creation'),
      ...options
    })
  }

  test('is a Vue instance', () => {
    const wrapper: any = getComponent({})
    expect(wrapper.findComponent(UiPictureUpload).exists()).toBe(true)
  })

  // test('onUpload', () => {
  // })

  test('onDelete', () => {
    const wrapper: any = getComponent({})
    wrapper.vm.onDelete()
    expect(wrapper.vm.$emit).toBeCalledWith('input', null)
  })

  test('buildUrlFromFile', () => {
    const wrapper: any = getComponent({})
    // @ts-ignore
    global.URL = { createObjectURL: jest.fn() }
    wrapper.vm.buildUrlFromFile({})
    expect(global.URL.createObjectURL).toBeCalledWith({})
  })

  test.each([
    [1000, 1000, true, ''],
    [999, 999, false, 'text__image_upload_error_min_size']
  ])('validateImage %s', (width: number, height: number, expected: any, expectedError) => {
    const wrapper: any = getComponent({})
    wrapper.vm.imageInfo = { width, height }
    expect(wrapper.vm.validateImage()).toBe(expected)
    wrapper.vm.validateImage()
    expect(wrapper.vm.error).toBe(expectedError)
  })

  test('updateFile %s', () => {
    const file = new File(['foo'], 'foo.txt', {
      type: 'text/plain'
    })
    const wrapper: any = getComponent({
      popsData: {
        inputPayload: file
      }
    })
    wrapper.vm.updateFile()
    expect(wrapper.vm.file).toBe(null)
  })
})
