import './App.css';
import {UserContainer} from "./components/UserContainer/UserContainer";

function App() {


    return (
        <div className="wrapper">
            <div className='wrap'><UserContainer/></div>
            <div className='wrap'><UserContainer/></div>
        </div>
    );
}

export {App};
