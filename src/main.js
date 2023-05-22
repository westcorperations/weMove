import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import GoogleSignInPlugin from "vue3-google-signin"
import './assets/main.css'
import './assets/tailwind.css'

const app = createApp(App)
app.use(GoogleSignInPlugin, {
  clientId: '690948873161-63n3a4p0sbug0bf130gvd1hggg4adm10.apps.googleusercontent.com',
});


app.use(createPinia())
app.use(router)

app.mount('#app')
