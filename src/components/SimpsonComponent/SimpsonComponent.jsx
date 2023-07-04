import styles from './SimpsonComponent.module.css';

const SimpsonComponent = (props) => {
    const {name, surname, age, info, photo} = props;

    return (
        <div className={styles.simpson}>
            <h1 className={styles.simpsonName}>{name} {surname}</h1>
            <div><b>Вік:</b> {age}</div>
            <div><b>Інформація:</b> {info}</div>
            <div className={styles.imgs}><img src={photo} alt={name}/></div>
        </div>
    );
}

export default SimpsonComponent;