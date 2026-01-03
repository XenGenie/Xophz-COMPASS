import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Index from '@/index.vue'

describe('Index', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    // In Vue 3 with script setup or options API, 'created' is a function
    expect(typeof Index.created).toBe('function')
  })

  // Evaluate the results of functions in the raw component options
  it('sets the correct default data', () => {
    expect(typeof Index.data).toBe('function')
    const defaultData = Index.data()
    expect(defaultData.wpMenuId).toBe('wpwrap')
  })

  // Inspect the component instance on mount
  it('correctly sets the wpOpenClass property', () => {
    const wrapper = mount(Index, {
      global: {
        stubs: {
          // Stub complex components to avoid errors
          'v-app': true,
          'v-app-bar': true,
          'v-container': true,
          'v-row': true,
          'v-col': true,
          'v-tooltip': true,
          'v-btn': true,
          'v-icon': true,
          'v-breadcrumbs': true,
          'v-main': true,
          'v-footer': true,
          'v-bottom-sheet': true,
          'v-toolbar': true,
          'v-chip': true,
          'v-list': true,
          'v-spacer': true,
          'v-toolbar-title': true,
          'v-avatar': true,
          'v-img': true,
          'v-list-item': true,
          'v-list-item-title': true,
          'v-btn-toggle': true,
          'nav-drawer': true,
          'user-avatar-btn': true,
          'Billboard': true,
          'router-view': true
        },
        mocks: {
          $route: { path: '/', matched: [] },
          $router: { options: { routes: [] }, push: () => {} }
        }
      }
    })
    expect(wrapper.vm.wpOpenClass).toBe('wp-responsive-open')
  })
})
