import Home from '~/pages/Home';
import Backpack from '~/pages/Backpack';
import Collections from '~/pages/Collections';
import HomeLayout from '~/layouts/HomeLayout';
import config from '~/config';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: HomeLayout
  },
  {
    path: config.routes.backpack,
    component: Backpack,
  },
  {
    path: config.routes.collections,
    component: Collections,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
