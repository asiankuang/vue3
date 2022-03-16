import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import i18n from './language/i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(router).use(i18n).mount('#app')
