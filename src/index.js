import ReactDOM from'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage';
import SlugPage from './pages/SlugPage';

import './assets/css/global.css'
import { UIProvider } from './context/UI/UIContext';
import EditPage from './pages/EditPage';
import { DBProvider } from './context/DB/DBContext';

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
            },
            {
                path: '/:slug/edit',
                element: <EditPage/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(

    <>
    
        <UIProvider>

            <DBProvider>
        
                <RouterProvider router={router} />
            
            </DBProvider>
        
        </UIProvider>

    </>

)