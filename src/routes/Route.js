import Contact from '../pages/Contact'
import Home from '../pages/Home';
import Login from '../pages/Login'
import NotFound from '../pages/NotFound';

export const routes = [ // Array of 
            { 
                path:"/",
                element:<Home/>
            },
            { 
                path:"/login",
                element:<Login/>
            },
            { 
                path:"/contact",
                element:<Contact />
            },
            { 
                path:"*",
                element:<NotFound />
            }
        ];