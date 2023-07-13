import styles from "../CreateUser/CreateUser.module.css";
import {useRef} from "react";

const CreateComment =()=>{

    const postIdRef = useRef('');
    const nameRef = useRef('');
    const emailRef = useRef('');
    const bodyRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postIdRef.current.value, nameRef.current.value, emailRef.current.value, bodyRef.current.value);
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId: postIdRef.current.value,
                name: nameRef.current.value,
                email: emailRef.current.value,
                body: bodyRef.current.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return(
        <div className={styles.wrap}>
            <div className={styles.formTitle}>Create New Comment:</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <label>PostId:
                    <br/>
                    <input type="number" ref={postIdRef} placeholder={'postId'}/>
                </label>
                <label>Name:
                    <br/>
                    <input type="text" ref={nameRef} placeholder={'name'}/>
                    {/*<input type="text" onChange={(event) => setUsername(event.target.value)} value={username}*/}
                    {/*       placeholder={'username'}/>*/}
                </label>
                <label>Email:
                    <br/>
                    <input type="email" ref={emailRef} placeholder={'email'}/>
                    {/*<input type="email" onChange={(event) => setEmail(event.target.value)} value={email}*/}
                    {/*       placeholder={'email'}/>*/}
                </label>
                <label>Body:
                    <br/>
                    <input type="text" ref={bodyRef} placeholder={'body'}/>
                    {/*<input type="text" onChange={(event) => setPhone(event.target.value)} value={phone}*/}
                    {/*       placeholder={'phone'}/>*/}
                </label>
                <input type="submit" value={'create'} className={styles.submitB}/>
            </form>

        </div>
    )
}

export {CreateComment}