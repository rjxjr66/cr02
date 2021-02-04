import styles from './Weight.module.css';

export function Weight({ weight, onClick, showAnswer }) {
    return <div className={styles.weight}>
        {showAnswer && weight.weight === 10?<div className={styles.answer}>내가 제일 무거워!</div>:null}
        <img onClick={_=>onClick(weight)} key={weight.color} src={`/images/05/weight${weight.color}.png`}></img>
    </div>
}