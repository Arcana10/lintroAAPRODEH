import React from 'react'
import ReactDOM from'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage';
import SlugPage from './pages/SlugPage';

import './assets/css/global.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/:slug',
                element: <SlugPage/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(

    <>
    
        <RouterProvider router={router} />

    </>

)