import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown, faDownload, faCircle, faCopyright,
  faCartShopping, faCircleUser, faMagnifyingGlass, faCirclePlus,
  faCircleMinus, faFileLines, faUser, faArrowRight,
  faCheck, faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter, faInstagram, faLinkedin, faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(
  faCircle,
  faSquareFacebook,
  faChevronDown,
  faDownload,
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
  faCirclePlus,
  faCircleMinus,
  faFileLines,
  faUser,
  faArrowRight,
  faCheck,
  faLocationDot,
  faTwitter,
  faInstagram,
  faLinkedin,
  faCopyright,
);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
