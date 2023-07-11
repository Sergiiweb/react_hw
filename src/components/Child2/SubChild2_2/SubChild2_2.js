import React, {createContext} from 'react';
import SubChild1_1 from "../../Child1/SubChild1_1/SubChild1_1";

export const SomeContext = createContext(null);
const SubChild22 = ({setSmth}) => {

    const toSend = `something what sending by lifting and drill`;
    const toSendWithContext = `something what sending by context`;

    return (
        <SomeContext.Provider value={toSendWithContext}>
            <div>
                <SubChild1_1/>
                SubChild2_2
                <button onClick={() => setSmth(toSend)}>Send smth from SubChild22</button>
            </div>
        </SomeContext.Provider>

)
    ;
};

export default SubChild22;