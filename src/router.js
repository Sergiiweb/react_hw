import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieInfoPage, MoviesPage, NotFoundPage} from "./pages";
import {MoviesByGenre} from "./components";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'/movies'}/>
            },
            {
                path: '/movies',
                element: <MoviesPage/>
            },
            {
                path: '/genres',
                element: <GenresPage/>,
                children:[
                    {
                        path: 'genreId/:genreId',
                        element: <MoviesByGenre/>
                    }
                ]
            },
            {
                path: 'movies/:movieId',
                element: <MovieInfoPage/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]);

export {
    router
}