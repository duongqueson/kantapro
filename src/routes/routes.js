import Home from '~/pages/Home';
import Backpack from '~/pages/Backpack';
import HomeLayout from '~/layouts/HomeLayout';

const publicRoutes = [
  {
    path: '/',
    component: Home,
    layout: HomeLayout
  },
  {
    path: '/collections/backpack',
    component: Backpack,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
