const SubChild22 = ({setSmth, setSmth2}) => {

    const toSend = `something what sending by lifting and drill`;
    const toSendWithContext = `something what sending for using context`;

    return (
        <div>
            SubChild2_2
            <br/>
            <button onClick={() => setSmth(toSend)}>Send smth from SubChild22 by lifting and drill</button>
            <br/>
            <button onClick={() => setSmth2(toSendWithContext)}><b>Send smth from SubChild22 To App for Context</b></button>
        </div>
    );
};

export default SubChild22;