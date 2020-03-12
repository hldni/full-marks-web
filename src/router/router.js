import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)


function route (path, file, name, children) {
    return {
        exact: true,
        path,
        name,
        children,
        component: () => import('../pages' + file)
    }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	  // route("/login",'/login',"Login"),
	  {
	    path: '/login',
	    name: 'login',
	     component: () => import(/* webpackChunkName: "about" */ '../pages/login.vue'),
		 redirect:"/login/password",
		 meta: {
			 keepAlive: true // 需要缓存
		   },
		 children:[ // 其它所有组件都是 login的子组件
			route("/login/password","/passwordLogin.vue","passwordLogin"),
			route("/login/codeLogin","/codeLogin.vue","codeLogin"),
		 ]
	  },
	  route("/test2",'/test/test2.vue',"test2"),
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
	route("/test",'/test/test.vue',"test"),
	route("/test1",'/test/test1.vue',"test1"),
	route("/test3",'/test/test3.vue',"test3"),
	route("/register",'/register.vue',"register"),
	route("/games/main",'/games/main.vue',"games")
  ]
})
