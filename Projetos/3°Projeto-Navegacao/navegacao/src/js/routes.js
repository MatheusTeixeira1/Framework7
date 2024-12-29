import HomePage from '../pages/home.f7';
import OqueSaoRotasPage from '../pages/oqueSaoRotas.f7';
import ComoFuncionaPage from '../pages/comoFunciona.f7';
import conclusaoPage from '../pages/conclusao.f7'
import exemploBeforeEnterPage from '../pages/exemploBeforeEnter.f7'
import exemploBeforeLeavePage from '../pages/exemploBeforeLeave.f7'

import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/oqueSao/',
    component: OqueSaoRotasPage,
  },
  {
    path: '/comoFunciona/',
    component: ComoFuncionaPage,
  },
  {
    path: '/conclusao/',
    component: conclusaoPage,
  },
  {
    path: '/exemploBeforeEnter/',
    component: exemploBeforeEnterPage,
    beforeEnter: function ({ resolve, reject }) {
      alert('Você está prestes a entrar na página de exemplo!');
      resolve();
    },
  },
  {
    path: '/exemploBeforeLeave/',
    component: exemploBeforeLeavePage,
    beforeLeave: function ({ resolve, reject }){
      alert('Já ta indo? tchau!')
      resolve();
    }
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },

];

export default routes;