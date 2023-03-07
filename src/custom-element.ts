PDR.mfe.install({
  root: false,
  attributes: ['message'],
  application() {
    return import(
      /* webpackChunkName: "app" */
      /* webpackPrefetch: true */
      './main'
    )
  }
})
