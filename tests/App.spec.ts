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
  })
})
