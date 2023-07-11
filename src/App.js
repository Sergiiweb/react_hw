import './App.css';
import {UsersComponent} from "./components/UsersComponent/UsersComponent";
import {useState} from "react";
import {UserPosts} from "./components/UserPosts/UserPosts";

function App() {
    const [userId, setUserId] = useState(null);
    const [isShow, setIsShow] = useState(false);

    return (
        <div className="wrapper">
            <UsersComponent setUserId={setUserId} setIsShow={setIsShow} isShow={isShow}/>
            {userId && isShow && <UserPosts userId={userId}/>}
        </div>
    );
}

export {App};
