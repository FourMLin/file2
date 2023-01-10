import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SortView from '../views/SortView.vue'

import SigninView from '../views/signin/signin.vue'
import RegisterView from '../views/signin/register.vue'
import RegisterformView from '../views/signin/registerform.vue'
import RegistercompleteView from '../views/signin/complete.vue'
import ForgotPassword from '../views/signin/forgot.vue'
import Contect from '../views/signin/contect.vue'

import ProductPageAlchol from '../views/product/ProductPageAlchol.vue'
import CartView from '../views/cart/cart.vue'
import ConfirmProduct from '../views/cart/ConfirmProduct.vue'
import Checkout from '../views/cart/Checkout.vue'
import FinishOrder from '../views/cart/FinishOrder.vue'
import CheckOrder from '../views/cart/CheckOrder.vue'

import MemberView from '../views/member/MemberView.vue'
import MemberData from '../views/member/Data.vue'
import MemberDataEditable from '../views/member/Dataeditable.vue'
import MemberCoinPage from '../views/member/CoinPage.vue'
import MemberCuponPage from '../views/member/CuponPage.vue'
import MemberBillPage from '../views/member/BillPage.vue'
import MemberTicketPage from '../views/member/TicketPage.vue'
import MemberQAPage from '../views/member/QAPage.vue'
import MemberNewsPage from '../views/member/NewsPage.vue'
import MemberBillInstructionPage from '../views/member/BillInstructionPage.vue'
import MemberInnerPage from '../views/member/InnerPage.vue'
import MemberNomenuInnerPage from '../views/member/NomenuInnerPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/registerform',
    name: 'registerform',
    component: RegisterformView
  },
  {
    path: '/registercomplete',
    name: 'registercomplete',
    component: RegistercompleteView
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: ForgotPassword
  },
  {
    path: '/contect',
    name: 'contect',
    component: Contect
  },
  {
    path: '/sortview',
    name: 'sortview',
    component: SortView
  },
  {
    path: '/productpagealchol',
    name: 'productpagealchol',
    component: ProductPageAlchol
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/confirmproduct',
    name: 'confirmproduct',
    component: ConfirmProduct
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '/finishorder',
    name: 'finishorder',
    component: FinishOrder
  },
  {
    path: '/checkorder',
    name: 'checkorder',
    component: CheckOrder
  },
  {
    path: '/member',
    name: 'member',
    component: MemberView
  },
  {
    path: '/memberdata',
    name: 'memberdata',
    component: MemberData
  },
  {
    path: '/membereditable',
    name: 'memberdataeditable',
    component: MemberDataEditable
  },
  {
    path: '/membercoinpage',
    name: 'membercoinpage',
    component: MemberCoinPage
  },
  {
    path: '/membercupon',
    name: 'membercupon',
    component: MemberCuponPage
  },
  {
    path: '/memberbillpage',
    name: 'memberbillpage',
    component: MemberBillPage
  },
  {
    path: '/memberticketpage',
    name: 'memberticketpage',
    component: MemberTicketPage
  },
  {
    path: '/memberqapage',
    name: 'memberqapage',
    component: MemberQAPage
  },
  {
    path: '/membernewspage',
    name: 'membernewspage',
    component: MemberNewsPage
  },
  {
    path: '/memberbillinstructionpage',
    name: 'memberbillinstructionpage',
    component: MemberBillInstructionPage
  },
  {
    path: '/memberinnerpage',
    name: 'memberinnerpage',
    component: MemberInnerPage
  },
  {
    path: '/membernomenuinnerpage',
    name: 'membernomenuinnerpage',
    component: MemberNomenuInnerPage
  }


  
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // mode: 'history',
  routes
})

export default router
