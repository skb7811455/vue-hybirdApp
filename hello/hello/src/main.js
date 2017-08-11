// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import login from './components/login/login.vue';
import home from './components/home/home.vue';
import orginazation from './components/orginazation/orginazation.vue';
import information from './components/information/information.vue';
import bulletins from './components/orginazation/bulletins/bulletins.vue';
import location from './components/orginazation/location/location.vue';
import members from './components/orginazation/members/members.vue';
import VueCordova from 'vue-cordova';
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 高德的key
  key: "2594146ddf678a12af68b9101e0ab9dc",
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
});


Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(VueResource);


const routes = [
{path:"/", component: login},
{path: '/home', component: home},
{path: '/orginazation', component: orginazation,
	children:[{
		path:"/orginaztion/bulletins", component: bulletins
	},
  {
    path:"/orginaztion/location", component: location
  },
  {
    path:"/orginaztion/members", component: members
  }
  ]},
{path: '/information', component: information}
];

let router = new VueRouter({routes, linkActiveClass: 'active'});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

