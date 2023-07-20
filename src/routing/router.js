import {createBrowserRouter} from "react-router-dom";
import {TodosContainer} from "../components/TodosContainer/TodosContainer";
import {AlbumsContainer} from "../components/AlbumsContainer/AlbumsContainer";
import {CommentsContainer} from "../components/CommentsContainer/CommentsContainer";
import {urls} from "../constants/urls";
import {AppLayout} from "../components/AppLayout/AppLayout";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <h1>Wrong route!</h1>,
        children:[
            {
                path: "/",
                element: <div>Main page!</div>,
            },
            {
                path: urls.todos.base,
                element: <TodosContainer/>,
            },
            {
                path: urls.albums.base,
                element: <AlbumsContainer/>,
            },
            {
                path: urls.comments.base,
                element: <CommentsContainer/>,
            },
        ]
    }
]);