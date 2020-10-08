import Vue from 'vue'

// Applies default accessibility functionality
// and attributes
export default Vue.directive('aria-element', {
  inserted (elementRef) {
    elementRef.tabIndex = 1
    elementRef.classList.add('tab-outline')

    elementRef.addEventListener('keydown', () => {
      elementRef.classList.remove('tab-outline')
    })

    elementRef.addEventListener('click', () => {
      elementRef.classList.add('tab-outline')
    })
  }
})
