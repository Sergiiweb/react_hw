import './App.css';
import {CarCreator} from "./components/CarCreator/CarCreator";
import {CarUpdater} from "./components/CarUpdater/CarUpdater";

function App() {


    return (
        <div className="wrapper">
            <CarCreator/>
            <CarUpdater/>
        </div>
    );
}

export {App};

// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин