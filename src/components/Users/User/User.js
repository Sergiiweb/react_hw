import css from './User.module.css';

const User = ({user}) => {
    const {id, name, image} = user;
    return (
        <div className={css.User}>
            <div>name: {name}, id: {id}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {User};