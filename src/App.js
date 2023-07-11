import './App.css';
import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";
import {createContext, useState} from "react";

export const SomeContext = createContext(null);
function App() {

    const [smth, setSmth] = useState(null);
    const [smth2, setSmth2] = useState(null);

    return (
        <SomeContext.Provider value={smth2}>
        <div className="wrapper">
            <Child1 smth={smth}/>
            <hr/>
            <Child2 setSmth={setSmth} setSmth2={setSmth2}/>
            <hr/>
            {smth ? (<div>{smth} in App</div>) : ''}
            {smth2 ? (<div>{smth2} in App</div>) : ''}
            <hr/>
        </div>
        </SomeContext.Provider>
    );
}

export {App};
