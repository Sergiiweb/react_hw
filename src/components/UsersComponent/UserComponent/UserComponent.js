import styles from "./UserComponent.module.css";

const UserComponent = ({user, setUserId, isShow, setIsShow}) => {
    const {id, name, username, email, phone, website} = user;
    return (
        <div className={styles.container}>
            <h2>User: {id}</h2>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>

            {/*{isShow && <button onClick={() => {*/}
            {/*    setIsShow(!isShow);*/}
            {/*}}>hide posts</button>}*/}
            {/*{!isShow && <button onClick={() => {*/}
            {/*    setUserId(id);*/}
            {/*    setIsShow(!isShow);*/}
            {/*}}>show posts</button>}*/}
            <button onClick={() => {
                setUserId(id)
                setIsShow(!isShow)
            }}>{isShow ? 'hide posts' : 'show posts'}</button>
        </div>
    );
};

export {UserComponent};