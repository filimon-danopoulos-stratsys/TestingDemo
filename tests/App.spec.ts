import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should contain message', () => {
    const wrapper = mount(App, {
      props: {
        message: 'Foo'
      }
    })
    expect(wrapper.html()).toContain('Some depth')
    // const DeepChild = wrapper.findComponent('DeepComponent')
    // expect(DeepChild).toBeDefined()
  })
})

// jest.mock('@/DeepChild.vue', () => ({ template: '<div></div>' }))
// jest.mock('@/BadChild.vue', () => ({ template: '<div></div>' }))
// jest.mock('@/GoodChildBadDependency.vue', () => ({ template: '<div></div>' }))
