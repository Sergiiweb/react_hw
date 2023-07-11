import React, {useContext} from 'react';
import {SomeContext} from "../../Child2/SubChild2_2/SubChild2_2";

const SubChild11 = ({smth}) => {

    const someData = useContext(SomeContext);

    return (
        <div>
            SubChild1_1
            {smth ? (<div>{smth} in SubChild11</div>) : ''}
            <div>CONTEXT: {someData}</div>
        </div>
    );
};

export default SubChild11;