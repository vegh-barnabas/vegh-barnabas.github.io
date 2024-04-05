import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';

import Homepage from 'routes/homepage/Homepage';
import ErrorPage from 'error-page';
import Contact from 'routes/contact/Contact';
import Elte from 'routes/elte/Elte';
import Navbar from 'components/navbar/Navbar';
import ThemeSwitcher from 'components/theme-switcher/Theme-switcher';

import 'index.scss';

function Layout() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.classList.add('transition');
    }, 300);

    return () => clearTimeout(timeout);
  });

  return (
    <>
      <Navbar />
      <ThemeSwitcher />
      <Outlet />
    </>
  );
}

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/elte',
        element: <Elte />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
