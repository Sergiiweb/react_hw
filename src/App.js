import './App.css';
import {CreateUser} from "./components/CreateUser/CreateUser";

function App() {


    return (
        <div className="wrapper">
            <CreateUser/>
        </div>
    );
}

export {App};


// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера
// постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар
// постовим запитом на http://jsonplaceholder.typicode.com/comments
