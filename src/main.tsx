import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Collection from "./pages/Collection.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Gallery from "./pages/Gallery.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/collection",
                element: <Collection/>
            },
            {
                path: "/contactUs",
                element: <ContactUs/>
            },
            {
                path: "/gallery",
                element: <Gallery/>
            },
            {
                path: "/shop",
                element: <div>Shop</div>
            }
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
