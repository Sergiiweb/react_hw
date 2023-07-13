import styles from './CreateUser.module.css'
import {useEffect, useState} from "react";

const CreateUser = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        console.log(name, username, email, phone);
    }, [name, username, email, phone]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, username, email, phone);
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.formTitle}>Create New User:</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Name:
                    <br/>
                    <input type="text" onChange={(event) => setName(event.target.value)} value={name}
                           placeholder={'name'}/>
                </label>
                <label>UserName:
                    <br/>
                    <input type="text" onChange={(event) => setUsername(event.target.value)} value={username}
                           placeholder={'username'}/>
                </label>
                <label>Email:
                    <br/>
                    <input type="email" onChange={(event) => setEmail(event.target.value)} value={email}
                           placeholder={'email'}/>
                </label>
                <label>Phone:
                    <br/>
                    <input type="text" onChange={(event) => setPhone(event.target.value)} value={phone}
                           placeholder={'phone'}/>
                </label>
                <input type="submit" value={'create'} className={styles.submitB}/>
            </form>

        </div>
    )
}

export {CreateUser};


