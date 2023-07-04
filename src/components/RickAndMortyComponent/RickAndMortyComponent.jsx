import styles from './RickAndMortyComponent.module.css';

const RickAndMortyComponent = (props) => {
    const {id, name, status, species, gender, image} = props;

    return (
        <div className={styles.person}>
            <div className={styles.personID}><b>ID:</b> {id}</div>
            <h1 className={styles.personName}>{name}</h1>
            <div><b>Status:</b> {status}</div>
            <div><b>Species:</b> {species}</div>
            <div><b>Gender:</b> {gender}</div>
            <div className={styles.imgs}><img src={image} alt={name}/></div>
        </div>
    );
}

export default RickAndMortyComponent;