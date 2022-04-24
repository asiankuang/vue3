import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import i18n from './language/i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts'
import './assets/style/global.scss'

const app = createApp(App)

// vue3 给原型上挂载属性
app.config.globalProperties.$echarts = echarts
app.use(ElementPlus).use(router).use(i18n).mount('#app')
