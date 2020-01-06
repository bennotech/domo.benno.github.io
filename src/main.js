import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faSearch, faChevronLeft, faChevronDown, faTimes, faBars, faShoppingCart, faDolly, faBookOpen, faShoppingBasket, faCheese, faCarrot, faUtensils, faSeedling, faSun, faSnowflake, faSpa, faSignal, faHandHoldingUsd, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faExternalLinkAlt, faSearch, faChevronLeft, faChevronDown, faTimes, faBars, faFacebookF, faLinkedinIn, faTwitter, faShoppingCart, faDolly, faBookOpen, faShoppingBasket, faCheese, faCarrot, faUtensils, faSeedling, faSun, faSnowflake, faSpa, faSignal, faHandHoldingUsd, faLongArrowAltRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
