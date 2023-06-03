import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/config/vee-validate/rules'
import '@/config/vee-validate/messages'
import i18n from '@/config/i18n/index'

import App from '@/App.vue'
import router from '@/router'

import TheLogin from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'
import TheParalax from '@/components/TheParalax.vue'
import TheModal from '@/components/TheModal.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
import NewPassword from '@/components/NewPassword.vue'
import TheFeedback from '@/components/TheFeedback.vue'
import TextInput from '@/components/TextInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import CheckboxInput from '@/components/CheckboxInput.vue'
import UserNavigation from '@/components/UserNavigation.vue'
import NewsfeedMovies from '@/components/NewsfeedMovies.vue'
import NewsfeedMovie from '@/components/NewsfeedMovie.vue'
import ProfileIcon from '@/components/ProfileIcon.vue'
import TheComment from '@/components/TheComment.vue'
import WriteQuote from '@/components/WriteQuote.vue'

const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.component('the-login', TheLogin)
app.component('sign-up', SignUp)
app.component('the-paralax', TheParalax)
app.component('the-modal', TheModal)
app.component('forgot-password', ForgotPassword)
app.component('new-password', NewPassword)
app.component('the-feedback', TheFeedback)
app.component('text-input', TextInput)
app.component('password-input', PasswordInput)
app.component('checkbox-input', CheckboxInput)
app.component('user-navigation', UserNavigation)
app.component('newsfeed-movies', NewsfeedMovies)
app.component('newsfeed-movie', NewsfeedMovie)
app.component('profile-icon', ProfileIcon)
app.component('the-comment', TheComment)
app.component('write-quote', WriteQuote)

app.mount('#app')
