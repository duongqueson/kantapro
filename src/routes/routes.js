import Home from '~/pages/Home';
import Backpack from '~/pages/Backpack';
import AllCollections from '~/pages/AllCollections';
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
  {
    path: '/collections/all',
    component: AllCollections,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
