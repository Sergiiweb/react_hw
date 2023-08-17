import css from './Character.module.css';

const Character = ({character}) => {
    const {id, name, image} = character;

    return (
        <div className={css.Character}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};