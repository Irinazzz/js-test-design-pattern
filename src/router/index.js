import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/introduce',
  },
  {
    path: '/',
    name: 'menu',
    component: (resolve) =>
      require(['@/view/components/layout/TheHome.vue'], resolve),
    children: [
      {
        path: '/introduce',
        name: 'introduce',
        component: (resolve) =>
          require(['@/view/pages/Introduce.vue'], resolve),
        meta: { title: '设计模式介绍' },
      },
      {
        path: '/decorate',
        name: 'decorate',
        redirect: '/decorate/cache-demo1',
        component: (resolve) =>
          require(['@/view/pages/decorate/Index.vue'], resolve),
        meta: { title: '装饰者模式' },
        children: [
          {
            path: '/decorate/log-demo1',
            name: 'decorateLogDemo1',
            component: (resolve) =>
              require(['@/view/pages/decorate/LogDemo1.vue'], resolve),
            meta: { title: '装饰者模式LogDemo1', nav: 'decorate' },
          },
          {
            path: '/decorate/log-demo1',
            name: 'decorateLogDemo1',
            component: (resolve) =>
              require(['@/view/pages/decorate/LogDemo1.vue'], resolve),
            meta: { title: '装饰者模式LogDemo1', nav: 'decorate' },
          },
          {
            path: '/decorate/cache-demo1',
            name: 'decorateCacheDemo1',
            component: (resolve) =>
              require(['@/view/pages/decorate/CacheDemo1.vue'], resolve),
            meta: { title: '装饰者模式CacheDemo1', nav: 'decorate' },
          },
          {
            path: '/decorate/cache-demo2',
            name: 'decorateCacheDemo2',
            component: (resolve) =>
              require(['@/view/pages/decorate/CacheDemo2.vue'], resolve),
            meta: { title: '装饰者模式CacheDemo2', nav: 'decorate' },
          },
        ],
      },
      {
        path: '/template',
        name: 'template',
        redirect: '/template/loading1',
        component: (resolve) => require(['@/view/pages/template/Index.vue'], resolve),
        meta: { title: '模板方法模式' },
        children: [
          {
            path: '/template/loading1',
            name: 'templateLoading1',
            component: (resolve) =>
              require(['@/view/pages/template/Loading1.vue'], resolve),
            meta: { title: '模板方法模式Loading1', nav: 'template' },
          },
          {
            path: '/template/loading2',
            name: 'templateLoading2',
            component: (resolve) =>
              require(['@/view/pages/template/Loading2.vue'], resolve),
            meta: { title: '模板方法模式Loading1', nav: 'template' },
          },
        ],
      },
      {
        path: '/strategy',
        name: 'strategy',
        redirect: '/strategy/demo1',
        component: (resolve) => require(['@/view/pages/strategy/Index.vue'], resolve),
        meta: { title: '策略模式' },
        children: [
          {
            path: '/strategy/demo1',
            name: 'strategyDemo1',
            component: (resolve) =>
              require(['@/view/pages/strategy/Demo1.vue'], resolve),
            meta: { title: '策略模式Demo1', nav: 'strategy' },
          },
          {
            path: '/strategy/demo2',
            name: 'strategyDemo2',
            component: (resolve) =>
              require(['@/view/pages/strategy/Demo2.vue'], resolve),
            meta: { title: '策略模式Demo2', nav: 'strategy' },
          },
        ],
      },
      {
        path: '/subscribe-public',
        name: 'subscribe-public',
        redirect: '/subscribe-public/demo1',
        component: (resolve) => require(['@/view/pages/subscribe-public/Index.vue'], resolve),
        meta: { title: '发布订阅模式' },
        children: [
          {
            path: '/subscribe-public/demo1',
            name: 'subscribe-publicDemo1',
            component: (resolve) =>
              require(['@/view/pages/subscribe-public/Demo1.vue'], resolve),
            meta: { title: '发布订阅模式Demo1', nav: 'subscribe-public' },
          },
          {
            path: '/subscribe-public/demo2',
            name: 'subscribe-publicDemo2',
            component: (resolve) =>
              require(['@/view/pages/subscribe-public/Demo2.vue'], resolve),
            meta: { title: '发布订阅模式Demo2', nav: 'subscribe-public' },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
