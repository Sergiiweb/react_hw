import {useCallback, useMemo, useState} from "react";

import DataView from "./DataView/DataView";
import {useToggle} from "../../hooks/useToggle";

const TestUseMemo = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(['Item']);

    const bigCalculation = (count) => {
        console.log('calculate')
        for (let i = 0; i < 1000000000; i++) {
            count += 1;
        }
        return count;
    };

    const calculation = useMemo(() => bigCalculation(count), [count])

    const changeCount = (type) => {
        setCount(type === 'increment' ? count + 1 : count - 1)
    };

    const addItem = useCallback(() => setData([...data, '|New Item']), [data])

    let status = false;
    status = useToggle(status)

    return (
        <div>
            TestUseMemo
            <hr/>
            <div>count: {count}</div>
            <button onClick={() => changeCount('increment')}>plus</button>
            <button onClick={() => changeCount('decrement')}>minus</button>
            <br/>
            <br/>
            <div>calculation: {calculation}</div>
            <br/>
            <hr/>
            <DataView data={data} addItem={addItem}/>
            <hr/>
            <div>{status ? <div>Status: True</div> : <div>Status: False</div>}</div>
            <hr/>
        </div>
    );
};

export {TestUseMemo};