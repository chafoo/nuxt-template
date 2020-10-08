// Doc: https://vue-test-utils.vuejs.org/guides/common-tips.html
import { shallowMount as _shallowMount, mount as _mount, VueClass, ThisTypedShallowMountOptions, Wrapper, ThisTypedMountOptions, createLocalVue, config as _config } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuelidate from 'vuelidate'
import AriaElementDirective from '~~/client/plugins/aria-element.directive'

const stubs = ['ui-button', 'ui-checkbox', 'ui-input', 'ui-select', 'ui-svg', 'client-only', 'ui-picture-upload']
const _localVue = createLocalVue()
const translation = (key: string) => key
const _options = { stubs }

// Add global mounts
// @ts-ignore
_config.mocks.$t = translation
// @ts-ignore
_config.mocks.$slugT = translation
// @ts-ignore
_config.mocks.app = {
  i18n: { t: translation }
}

// Add instance mocks
const setInstanceMocks = (instance: any) => {
  instance.vm.$store = { commit: jest.fn() }
  instance.vm.$router = { push: jest.fn() }
  instance.vm.$emit = jest.fn()
}

// Add global directives
// @ts-ignore
_localVue.directive(AriaElementDirective)

// Add global plugins
_localVue.use(Vuelidate)
_localVue.use(Vuex)

export const config = _config
export const localVue = _localVue

export function shallowMount <V extends Vue> (component: VueClass<V>, options?: ThisTypedShallowMountOptions<V>): Wrapper<V> {
  const __shallowMont: any = _shallowMount(component, { ..._options, ...options, localVue })
  setInstanceMocks(__shallowMont)
  return __shallowMont
}

export function mount <V extends Vue> (component: VueClass<V>, options?: ThisTypedMountOptions<V>): Wrapper<V> {
  const __mount: any = _mount(component, { ..._options, ...options, localVue })
  setInstanceMocks(__mount)
  return __mount
}
