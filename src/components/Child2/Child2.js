import React from 'react';
import SubChild2_1 from "./SubChild2_1/SubChild2_1";
import SubChild2_2 from "./SubChild2_2/SubChild2_2";

const Child2 = ({setSmth}) => {
    return (
        <div>
            Child2
            <SubChild2_1/>
            <SubChild2_2 setSmth={setSmth}/>
        </div>
    );
};

export default Child2;