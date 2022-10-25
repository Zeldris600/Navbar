import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AboutUs from '../pages/AboutUs';
import admin from '../pages/Admin';
import contact from '../pages/ContactUs';
import dash from '../pages/DashBoard';
import Don from '../pages/Donate';
import Form from '../pages/Formhook';
import log from '../pages/Login';
import mess from '../pages/Messages';
import set from '../pages/Settings';
import { Signup } from '../pages/signup';
//import SignUp from "./pages/SignUp";
import formhook from '../pages/Formhook';
import Login from '../pages/Login';
import Terms from '../pages/Terms';
import Privacy from '../pages/Privacy';

const routes = [
  {
    path: '/',
    element: App,
  },
  {
    path: '/login',
    element: Login,
  },
  // You are supposed to call ure eltms as JSX
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/about-us',
    element: AboutUs,
  },
  {
    path: '/contact-us',
    element: contact,
  },
  {
    path: '/donate',
    element: Don,
  },
  {
    path: '/dashboard',
    element: dash,
  },
  {
    path: '/admin',
    element: admin,
  },
  {
    path: '/messages',
    element: mess,
  },
  {
    path: '/settings',
    element: set,
  },
  {
    path: '/privacy',
    element: Privacy,
  },
  {
    path: '/terms',
    element: Terms,
  },
];

const router = createBrowserRouter(routes);
export default router;
