import { createWebHistory, createRouter } from "vue-router";
import HomePage from './components/pages/HomePage';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import AddRestaurant from './components/pages/AddRestaurant';
import UpdateRestaurant from './components/pages/UpdateRestaurant';

const routes = [
    {
        name: 'Home',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/login'
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/add-restaurant'
    },
    {
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path: '/update-restaurant/:id'
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;