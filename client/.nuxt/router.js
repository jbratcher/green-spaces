import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14a0591c = () => interopDefault(import('..\\pages\\Donate.vue' /* webpackChunkName: "pages_Donate" */))
const _5dc53636 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages_Login" */))
const _31dea234 = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages_Register" */))
const _4554e6af = () => interopDefault(import('..\\pages\\Start.vue' /* webpackChunkName: "pages_Start" */))
const _6602e757 = () => interopDefault(import('..\\pages\\Volunteer.vue' /* webpackChunkName: "pages_Volunteer" */))
const _6ec8b824 = () => interopDefault(import('..\\pages\\events\\_id.vue' /* webpackChunkName: "pages_events__id" */))
const _1cab733f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Donate",
    component: _14a0591c,
    name: "Donate"
  }, {
    path: "/Login",
    component: _5dc53636,
    name: "Login"
  }, {
    path: "/Register",
    component: _31dea234,
    name: "Register"
  }, {
    path: "/Start",
    component: _4554e6af,
    name: "Start"
  }, {
    path: "/Volunteer",
    component: _6602e757,
    name: "Volunteer"
  }, {
    path: "/events/:id?",
    component: _6ec8b824,
    name: "events-id"
  }, {
    path: "/",
    component: _1cab733f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
