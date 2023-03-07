import { createApp } from 'vue'
import App from '@/App.vue'
import { MicrofrontendApplication } from '@stratsys/pdr-typings/typings/pdr/microfrontends/types/types'

export const main = async (
  $element: HTMLElement,
  attributes: Record<string, string>
): Promise<Application> => {
  return new Application($element, attributes)
}

export class Application implements MicrofrontendApplication {
  private vueApp
  public constructor($element: HTMLElement, attributes: Record<string, string>) {
    this.vueApp = createApp(App, {
      message: attributes.message || ''
    })
    this.vueApp.mount($element)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(name: string, newValue: string) {
    // eslint-disable-next-line no-console
    console.warn(
      'In order for changes to be relayed to the application you need to take actions in the update method!'
    )
  }

  public destroy(): void {
    this.vueApp.unmount()
  }
}
