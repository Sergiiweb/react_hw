import {FC, PropsWithChildren, useEffect, useState} from "react";

interface IProps extends PropsWithChildren {

}

const Template: FC<IProps> = () => {
    const [user, setUser] = useState<boolean|null>(null);

    useEffect(() => {
        setUser(prevState => !prevState);
    }, []);

    return (
        <div>
            Питання??? Семен балованний????
            <div style={{fontSize:40}}>
                {user
                ? <div style={{backgroundColor:'blue', color:'yellow'}}>Семен балований</div>
                : <div style={{backgroundColor:'yellow', color:'blue'}}>Семен не балований</div>}
                <div><button onClick={()=>setUser(prevState => !prevState)}>????????????????</button></div>
            </div>
        </div>
    )
}

export {Template}