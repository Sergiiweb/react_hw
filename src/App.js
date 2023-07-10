import './App.css';
import {Posts} from "./components/Posts/Posts";
import {Users} from "./components/Users/Users";
import {useState} from "react";
import {UserPosts} from "./components/Users/UserPosts/UserPosts";


function App() {
    const [userId, setUserId] = useState(null);
    return (
        <div className="wrapper">
            {/*<Posts/>*/}
            <Users setUserId={setUserId}/>
            {userId && <UserPosts userId={userId}/>}
        </div>
    );
}

export {App};
