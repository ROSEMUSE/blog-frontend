const c1 = () => import(/* webpackChunkName: "page--src--pages--social-vue" */ "/Users/gaoshidi/Desktop/训练营/fed-e-task-03-04/code/my-gridsome-site/src/pages/Social.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--project-vue" */ "/Users/gaoshidi/Desktop/训练营/fed-e-task-03-04/code/my-gridsome-site/src/pages/Project.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/Users/gaoshidi/Desktop/训练营/fed-e-task-03-04/code/my-gridsome-site/src/templates/project.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--strapi-blog-vue" */ "/Users/gaoshidi/Desktop/训练营/fed-e-task-03-04/code/my-gridsome-site/src/templates/StrapiBlog.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/gaoshidi/Desktop/训练营/fed-e-task-03-04/code/my-gridsome-site/src/pages/Blog.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome-0-7-21-gridsome--app--pages--404-vue" */ "/Users/gaoshidi/Desktop/训练营/fed-e-task-03-04/code/my-gridsome-site/node_modules/_gridsome@0.7.21@gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/gaoshidi/Desktop/训练营/fed-e-task-03-04/code/my-gridsome-site/src/pages/Index.vue")

export default [
  {
    path: "/social/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/project/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/project-details/:id/",
    component: c3
  },
  {
    path: "/blog-details/:id/",
    component: c4
  },
  {
    path: "/blog/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
