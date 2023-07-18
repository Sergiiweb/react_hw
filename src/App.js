import './App.css';
import {UserContainer} from "./components/UserContainer/UserContainer";
import {CommentContainer} from "./components/CommentContainer/CommentContainer";

function App() {


    return (
        <div className="wrapper">
            <div className='wrap'><UserContainer/></div>

            <div className='wrap'><CommentContainer/></div>
        </div>
    );
}

export {App};
