import styles from './CreateUser.module.css'
import {useEffect, useRef, useState} from "react";

const CreateUser = () => {
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');

    // useEffect(() => {
    //     console.log(name, username, email, phone);
    // }, [name, username, email, phone]);
    const nameRef = useRef('');
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value, usernameRef.current.value, emailRef.current.value, phoneRef.current.value);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: nameRef.current.value,
                username: usernameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.formTitle}>Create New User:</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Name:
                    <br/>
                    <input type="text" ref={nameRef} placeholder={'name'}/>
                    {/*<input type="text" onChange={(event) => setName(event.target.value)} value={name}*/}
                    {/*       placeholder={'name'}/>*/}
                </label>
                <label>UserName:
                    <br/>
                    <input type="text" ref={usernameRef} placeholder={'username'}/>
                    {/*<input type="text" onChange={(event) => setUsername(event.target.value)} value={username}*/}
                    {/*       placeholder={'username'}/>*/}
                </label>
                <label>Email:
                    <br/>
                    <input type="email" ref={emailRef} placeholder={'email'}/>
                    {/*<input type="email" onChange={(event) => setEmail(event.target.value)} value={email}*/}
                    {/*       placeholder={'email'}/>*/}
                </label>
                <label>Phone:
                    <br/>
                    <input type="text" ref={phoneRef} placeholder={'phone'}/>
                    {/*<input type="text" onChange={(event) => setPhone(event.target.value)} value={phone}*/}
                    {/*       placeholder={'phone'}/>*/}
                </label>
                <input type="submit" value={'create'} className={styles.submitB}/>
            </form>

        </div>
    )
}

export {CreateUser};


