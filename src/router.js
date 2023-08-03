import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {UsersPage, CommentsPage, NotFoundPage, PostsPage, ArrayPage} from "./pages";
import {App} from "./App";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'app'}/>
            },
            {
                path: 'app',
                element: <App/>,
            },
            {
                path: 'users',
                element: <UsersPage/>,
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
            {
                path: 'array',
                element: <ArrayPage/>
            },
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