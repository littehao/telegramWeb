import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import BaseLayout from '@/components/BaseLayout/index.jsx';

const routes = [
 {
  path: '/',
  name: 'baseLayout',
  component: BaseLayout,
  meta: {
   title: 'TON链游-首页'
  },
  children:[
   {
    path:'/',
    component: () => <Navigate to="/Exchange" />
   },
   {
    path: '/Exchange',
    name: 'Exchange',
    component: lazy(() => import('@/views/Exchange/Exchange')),
    meta: {
     title: 'TON链游-Exchange'
    }
   },
   {
    path: '/Playground',
    name: 'Playground',
    component: lazy(() => import('@/views/Playground/Playground')),
    meta: {
     title: 'TON链游-Playground'
    }
   },
   {
    path: '/Friends',
    name: 'Friends',
    component: lazy(() => import('@/views/Friends/Friends')),
    meta: {
     title: 'TON链游-Friends'
    }
   },
   {
    path: '/AirDrop',
    name: 'AirDrop',
    component: lazy(() => import('@/views/AirDrop/AirDrop')),
    meta: {
     title: 'TON链游-AirDrop'
    }
   }
  ]
 }, {
  path: '/Level',
  name: 'Level',
  component: lazy(() => import('@/views/Level/Level')),
  meta: {
   title: 'TON链游-Level'
  }
 }, {
  path: '/login',
  name: 'login',
  component: lazy(() => import('@/views/Login')),
  meta: {
   title: 'APP名称-登录'
  }
 }, {
  path: '*',
  name: '404',
  component: lazy(() => import('@/views/Page404')),
  meta: {
   title: '404页面-知乎日报'
  }
 }
]
export default routes;