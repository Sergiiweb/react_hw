import './App.css';
import {CarCreator} from "./components/CarCreator/CarCreator";
import {CarUpdater} from "./components/CarUpdater/CarUpdater";
import {CarDeleter} from "./components/CarDeleter/CarDeleter";

function App() {


    return (
        <div className="wrapper">
            <CarCreator/>
            <CarUpdater/>
            <CarDeleter/>
        </div>
    );
}

export {App};

// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин