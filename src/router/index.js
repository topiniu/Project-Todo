import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Index from '~';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: Index,
    },
  ],
});
