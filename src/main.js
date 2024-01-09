import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import '@/assets/main.css'
import 'tw-elements';

import '@/axios.js'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

/* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons';




/* add icons to the library */
// library.add(fas,fab)

const app = createApp(App)

app.use(pinia)
app.use(router)
// app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
