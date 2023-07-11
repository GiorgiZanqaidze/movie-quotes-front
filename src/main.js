import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/config/vee-validate/rules'
import '@/config/vee-validate/messages'
import i18n from '@/config/i18n/index'

import App from '@/App.vue'
import router from '@/router'

import UserNavigation from '@/components/UserNavigation.vue'
import NewsFeedQuote from '@/components/NewsFeedQuote.vue'
import ProfileIcon from '@/components/ProfileIcon.vue'
import TheComment from '@/components/TheComment.vue'
import WriteQuote from '@/components/WriteQuote.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)

app.component('user-navigation', UserNavigation)
app.component('newsfeed-movie', NewsFeedQuote)
app.component('profile-icon', ProfileIcon)
app.component('the-comment', TheComment)
app.component('write-quote', WriteQuote)

app.mount('#app')
