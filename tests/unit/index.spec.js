import Vue from 'vue'
import Index from '@/index.vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Index', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Index.created).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof Index.data).toBe('function')
    const defaultData = Index.data()
    expect(defaultData.wpMenuId).toBe('wpwrap')
  })

  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(Index).$mount()
    expect(vm.wpOpenClass).toBe('wp-responsive-open')
  })

  // // Mount an instance and inspect the render output
  // it('renders the correct message', () => {
  //   const Constructor = Vue.extend(Index)
  //   const vm = new Constructor().$mount()
  //   expect(vm.$el.textContent).toBe('bye!')
  // })
})
