/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { createPinia } from 'pinia'
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import GridLayout from 'vue3-drr-grid-layout'
import 'vue3-drr-grid-layout/dist/style.css'
import { createAxiosInstance } from '@/services/base'

export let axiosInstance;

export function registerPlugins (app, options) {
  axiosInstance = createAxiosInstance(options.apiUrl);
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(GridLayout)
    .use(createPinia())
}
