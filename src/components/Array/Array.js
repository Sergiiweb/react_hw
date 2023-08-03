import {useState} from "react";
import {useArray} from "../../hooks/useArray";

const Array = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [method, setMethod] = useState(null);
    const [id, setId] = useState(null);

    useArray(array, method, id)

    if (method !== null) {
        setMethod(null);
        setId(null);
    }
    const addItem = () => {
        setMethod('add')
    }

    const deleteItem = (index) => {
        setId(index);
        setMethod('delete')
    }
    return (
        <div>
            Array:
            {array.map((item, index) => {
                return (
                    <div key={index} style={{display:"flex"}}>
                        <div>{item}</div>
                        <button onClick={()=>deleteItem(index)}>DeleteItem</button>
                    </div>
                )
            })}
            <button onClick={addItem}>AddItem</button>
        </div>
    );
};

export {Array};