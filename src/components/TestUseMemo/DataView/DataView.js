import {memo} from "react";

const DataView = ({data, addItem}) => {
    console.log('child render');
    return (
        <div>
            <div style={{display:"flex"}}>{data.map((item, index)=><p key={index}>{item}</p>)}</div>
            <button onClick={addItem}>AddItem</button>
        </div>
    );
};

export default memo(DataView);