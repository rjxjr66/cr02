import { IWeight } from './types';
import styles from './Weight.module.css';

interface IWeightProps {
    weight: IWeight,
    onClick?: (any)=>any,
    showAnswer?: boolean,
    draggable?: boolean,
    index?: number,
    groupIndex?: number
}

export const Weight:React.FC<IWeightProps> = ({ weight, onClick = _=>_, showAnswer = false, draggable = false, index = null, groupIndex = null }) => {
    const onDragStart = (e) => {
        e.target.style.opacity = 0;
        e.dataTransfer.setData('application/json', JSON.stringify({
            groupIndex,
            index
        }))
    }

    const onDragEnd = (e) => {
        e.target.style.opacity = 1;
    }

    return <div 
            className={styles.weight} draggable={draggable}
            onDragStart={onDragStart} onDragEnd={onDragEnd}
        >
        {showAnswer && (weight.weight === 10 || weight.weight === 1)?<div className={styles.answer}>내가 제일 {weight.weight === 10?'무거':'가벼'}워!</div>:null}
        <img data-index={groupIndex} style={{ margin: "-10px" }} onClick={_=>onClick(weight)} key={weight.color} src={`/images/05/weight${weight.color}.png`}></img>
    </div>
}