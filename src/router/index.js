import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import Dashboard from '@/pages/Dashboard'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'
import Login from '@/pages/Login'
import store from '../store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'About',
            component: About
        },
        {
            path: '/blog/:id?',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                auth: true
            }
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.auth && ('undefined' === typeof store.getters.getUser.rank || store.getters.getUser.rank < 1))
        next({name: 'Login'})
    else {
        next()
    }
})

export default router
