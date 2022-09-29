import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootNav from './routes/rootNav';
import MainHomeContent from './routes/mainHomeContent';
import AboutUs from './routes/aboutUs';
import Footer from './routes/footer';
import ErrorPage from "./error-page";

const root = ReactDOM.createRoot(document.getElementById('root'));

const landScapeOR = window.matchMedia('(orientation: landscape)')
const portraitOR = window.matchMedia('(orientation: portrait)')
const smWindowWidth = window.matchMedia('(max-width: 767px)')

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootNav
                landScapeOR={landScapeOR}
                portraitOR={portraitOR}
                smWindowWidth = {smWindowWidth}
              />,
    errorElement: <ErrorPage/>,
    children: [{
      path: "Replicat-Soft-Revival",
      element: <MainHomeContent
                  landScapeOR={landScapeOR}
                  portraitOR={portraitOR}
                  smWindowWidth={smWindowWidth}
                />
    },
    {
      path: "About-us",
      element: <AboutUs/>
    }]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
);


