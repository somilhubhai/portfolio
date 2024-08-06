import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import './index.css'
import Layout from './Layout';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route path="" element={<Portfolio /> } />
      <Route path="about" element={ <About /> } />
      <Route path="contact" element={ <Contact /> } />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
