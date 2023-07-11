import './App.css';
import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";
import {useState} from "react";

function App() {

    const [smth, setSmth] = useState(null);

    return (
        <div className="wrapper">
            <Child1 smth={smth}/>
            <hr/>
            <Child2 setSmth={setSmth}/>
            <hr/>
            {smth ? (<div>{smth} in App</div>) : ''}
            <hr/>
        </div>
    );
}

export {App};
