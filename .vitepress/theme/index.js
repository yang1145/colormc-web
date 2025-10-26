import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MinecraftButton from './components/MinecraftButton.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MinecraftButton', MinecraftButton)
  }
}