import '@stratsys/pdr-typings'

declare global {
  interface Window {
    [key: string]: any
  }

  const VERSION: string
}

export {}
