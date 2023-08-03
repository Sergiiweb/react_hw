import {useMemo, useState} from "react";

const TestUseMemo = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    const bigCalculation = (count) => {
        for (let i = 0; i < 1000000000; i++) {
            count += 1;
        }
        return count;
    };

    const calculation = useMemo(()=>{
        return bigCalculation(count);
    },[count])

    console.log('count:', count)

    const changeData = (type) => {
        setCount(type === 'increment' ? count + 1 : count - 1)
    };

    const addItem = () => setData([...data, 'New Item']);

    return (
        <div>
            TestUseMemo
            <hr/>
            <div>count: {count}</div>
            <button onClick={() => changeData('increment')}>plus</button>
            <button onClick={() => changeData('decrement')}>minus</button>
            <br/>
            <div>calculation: {calculation}</div>
            <br/>
            <hr/>
            <br/>
            {data.map((item, index)=><p key={index}>{item}</p>)}
            <button onClick={addItem}>AddItem</button>
        </div>
    );
};

export {TestUseMemo};