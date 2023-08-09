import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {UsersPage, NotFoundPage, EpisodesPage, CharactersPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'all-characters'}/>
            },
            {
                path: 'all-characters',
                element: <UsersPage/>
            },
            {
                path: 'episodes',
                element: <EpisodesPage/>
            },
            {
                path: 'characters',
                element: <CharactersPage/>
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