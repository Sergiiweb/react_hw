import React from 'react';
import SubChild2_1 from "./SubChild2_1/SubChild2_1";
import SubChild2_2 from "./SubChild2_2/SubChild2_2";

const Child2 = ({setSmth, setSmth2}) => {
    return (
        <div>
            Child2
            <SubChild2_1/>
            <SubChild2_2 setSmth={setSmth} setSmth2={setSmth2}/>
        </div>
    );
};

export default Child2;