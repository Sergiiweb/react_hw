import './App.css';
import {TodosContainer} from "./components/TodosContainer/TodosContainer";
import {AlbumsContainer} from "./components/AlbumsContainer/AlbumsContainer";
import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";

function App() {


    return (
        <div className="wrapper">
            {/*<CommentsContainer/>*/}
            {/*<AlbumsContainer />*/}
            <CommentsContainer />
        </div>
    );
}

export {App};
