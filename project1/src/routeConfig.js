import { createWebHistory, createRouter } from "vue-router";
import MyHome from './components/MyHome';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import PageNotFound from './components/PageNotFound';
import WatcherComponent from './components/WatcherComponent';


import FirstComponent from './components/FirstComponent';

const routes=[
    {
        name:'Home',
        path:'/',
        component:MyHome,
        meta: { title: 'Welcome' }
    },
    {
        name:'Login',
        path:'/login',
        component:LoginPage
    },
    {
        name:'Profile',
        path:'/profile/:name',
        component:ProfilePage,
        meta: { title: 'About - MyApp' }
    },
    {
        name: 'First',
        path: '/first',
        component: FirstComponent
    },
    {
        name: 'Watcher',
        path: '/watcher',
        component: WatcherComponent
    },
    {
        name:'404',
        path:'/:pathMatch(.*)*',
        component:PageNotFound
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;