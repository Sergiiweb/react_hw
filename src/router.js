import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: '/movies',
                element:<MoviesPage/>
            }
        ]
    }
]);

export {
    router
}