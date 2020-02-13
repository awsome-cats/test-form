import Vue from "vue";
import Router from "vue-router";
import Form from './components/Form.vue'
import SubmissionFail from './components/SubmissionFail.vue'
import SubmissionSuccess from './components/SubmissionSuccess.vue'
import HelloWorld from './components/HelloWorld.vue'




Vue.use(Router);

export default new Router({
   mode: "history",
   base: process.env.BASE_URL,
   routes: [
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
      },
      {
         path: "/hello",
         name: "HelloWorld",
         component: HelloWorld
      }
   ]
   

});
