import './App.css';
import Cars from "./components/Cars/Cars";
import {CarCreator} from "./components/CarCreator/CarCreator";
import React from "react";

function App() {


    return (
        <div className="wrapper">
            <Cars />
            <CarCreator/>
        </div>
    );
}

export {App};

// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин