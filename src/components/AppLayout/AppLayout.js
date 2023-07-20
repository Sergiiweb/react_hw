import React from 'react';
import {Navbar} from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export {AppLayout};