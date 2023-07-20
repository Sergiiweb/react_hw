import {createBrowserRouter} from "react-router-dom";
import {TodosContainer} from "../components/TodosContainer/TodosContainer";
import {AlbumsContainer} from "../components/AlbumsContainer/AlbumsContainer";
import {CommentsContainer} from "../components/CommentsContainer/CommentsContainer";
import {AppLayout} from "../components/AppLayout/AppLayout";
import {AppRoutes} from "./AppRoutes";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <h1>Wrong route!</h1>,
        children:[
            {
                path: AppRoutes.MAIN,
                element: <div>Main page!</div>,
            },
            {
                path: AppRoutes.TODOS,
                element: <TodosContainer/>,
            },
            {
                path: AppRoutes.ALBUMS,
                element: <AlbumsContainer/>,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <CommentsContainer/>,
            },
        ]
    }
]);