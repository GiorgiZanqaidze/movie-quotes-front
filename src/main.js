import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './config/vee-validate/rules'
import './config/vee-validate/messages'
import i18n from '@/i18n/index'

import App from './App.vue'
import router from './router'

import TheLogin from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import TheParalax from './components/TheParalax.vue'
import TheModal from './components/TheModal.vue'
import TheHeader from './components/TheHeader.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import CheckEmail from './components/CheckEmail.vue'
import NewPassword from './components/NewPassword.vue'
import TheInput from './components/TheInput.vue'

const app = createApp(App)
app.component('the-login', TheLogin)
app.component('sign-up', SignUp)
app.component('the-paralax', TheParalax)
app.component('the-modal', TheModal)
app.component('the-header', TheHeader)
app.component('forgot-password', ForgotPassword)
app.component('check-email', CheckEmail)
app.component('new-password', NewPassword)
app.component('the-input', TheInput)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
