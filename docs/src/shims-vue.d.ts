declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-fomantic-ui' {
  import { App } from 'vue' 
  export const install: (app: App) => void
}