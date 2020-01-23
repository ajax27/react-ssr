import App from './App';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import AdminsPage from './pages/AdminsPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsPage,
        path: '/admins'
      },
      {
        ...UsersPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
