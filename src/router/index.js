import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/views/Index.vue'
import sign from '@/components/sign/Index.vue'
import home from '@/components/home/Index.vue'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                openPath: true
            }
        },
        {
            path: '/sign',
            name: 'SignInOut',
            component: sign,
            meta: {
                openPath: true
            }
        }
    ]
})
