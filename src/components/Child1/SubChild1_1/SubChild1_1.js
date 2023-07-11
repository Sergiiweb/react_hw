import React, {useContext} from 'react';
import {SomeContext} from "../../../App";

const SubChild11 = ({smth}) => {

    const someData = useContext(SomeContext);

    return (
        <div>
            SubChild1_1
            <div>Lifting and drill: {smth ? (<span>{smth} in SubChild11</span>) : ''}</div>
            <div><b>CONTEXT: {someData}</b></div>
        </div>
    );
};

export default SubChild11;