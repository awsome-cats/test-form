import Vue from "vue";
import VueRouter from "vue-router";
import Form from './components/Form.vue'
import SubmissionFail from './components/SubmissionFail.vue'
import SubmissionSuccess from './components/SubmissionSuccess.vue'




Vue.use(VueRouter);

const routes = [
   {
      path:"/",
      name: "Form",
      component: Form
   },
   {
      path:"/fail",
      name: "SubmissionFail",
      component: SubmissionFail
   },
   {
      path:"/success",
      name:"SubmissionSuccess",
      component:SubmissionSuccess
   }
];

const router = new VueRouter({
   base: process.env.BASE_URL,
   routes
});

export default router;