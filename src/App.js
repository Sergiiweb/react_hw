import './App.css';
import PostsContainer from "./components/PostsContainer/PostsContainer";

function App() {
    return (
        <div className="wrapper">
            <PostsContainer/>
        </div>
    );
}

export default App;

// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)