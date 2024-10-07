// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

//  浏览量的插件：不蒜子
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

// 浏览量的主页组件：不蒜子 
import DataPanel from "./components/DataPanel.vue"

export default {
  extends: DefaultTheme,

  enhanceApp({ app , router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    app.component('DataPanel' , DataPanel)
  },
  
}