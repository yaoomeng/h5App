import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login/index";
Vue.use(VueRouter);
const Register = () =>
  import(/* webpackChunkName: "register" */ "../pages/Register/index.vue");
const PersonalReg = () =>
  import(
    /* webpackChunkName: "personal-reg" */ "../pages/Register/PersonalReg.vue"
  );
const TeamReg = () =>
  import(/* webpackChunkName: "team-reg" */ "../pages/Register/TeamReg.vue");
const SelectedReg = () =>
  import(
    /* webpackChunkName: "selected-reg" */ "../pages/Register/SelectedReg.vue"
  );
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register,
    children: [
      {
        path: "",
        name: "Register",
        component: SelectedReg,
      },
      {
        path: "personal",
        name: "Personal",
        component: PersonalReg,
      },
      {
        path: "team",
        name: "Team",
        component: TeamReg,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
