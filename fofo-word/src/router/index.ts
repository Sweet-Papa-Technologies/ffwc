import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';
import { useSessionStore } from 'src/stores/session-store';
import { getCurrentAuthUser } from 'src/ts/firebaseAPIs';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach(
    (to, from, next) => {

      // Check if we have a user session in general:
      getCurrentAuthUser()
      .then((currentUser) => {
      let bLoggedIn = false

      if (currentUser){
        bLoggedIn = true
        console.log("User is Logged In")
      }

      // Make sure we have a user Session in the store
      const store = useSessionStore();
      console.log("Checking for Session Data...")

      if (!store.userData) {
        // Redirect to the main menu
        console.log("No Session Data Found, Redirecting to Main Menu")
        Router.push({ name: 'index' });
      } else {
        console.log("Session Data Found, Proceeding to Route")
        if (bLoggedIn === true){
          console.log("Updating User Data in Store")
          store.setUserData({
            uid: currentUser?.uid || "N/A",
            email: currentUser?.email || "N/A",
            displayName: currentUser?.displayName || "Player 1",
            authToken: currentUser?.refreshToken || "N/A"
          })
        }
        next();
      }

      }).catch((error) => {
        console.error(error)
        console.log("No Session Data Found, Redirecting to Main Menu")
        Router.push({ name: 'index' });
      })

  })

  return Router;

})

