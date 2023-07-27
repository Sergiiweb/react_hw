import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MoviesPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: '/movies',
                element: <MoviesPage/>
            },
            {
                path: '/genres',
                element: <GenresPage/>
            }
        ]
    }
]);

export {
    router
}