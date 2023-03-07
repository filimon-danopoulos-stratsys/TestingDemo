import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should contain message', () => {
    const wrapper = mount(App, {
      props: {
        message: 'Foo'
      },
      global: {
        stubs: {
          BadChild: true,
          GoodChildBadDependency: true
        }
      }
    })
    expect(wrapper.html()).toContain('Some depth')
  })
})

// jest.mock('@/bad-dependency.ts', () => ({}))
