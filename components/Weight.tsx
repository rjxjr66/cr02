import { IWeight } from './types';
import styles from './Weight.module.css';
import { Draggable } from 'react-beautiful-dnd';

interface IWeightProps {
    weight: IWeight,
    onClick?: (any)=>any,
    showAnswer?: boolean,
    draggable?: boolean,
    index?: number,
    groupIndex?: number
}

export const Weight:React.FC<IWeightProps> = ({ weight, onClick = _=>_, showAnswer = false, draggable = false, index = null, groupIndex = null }) => {
    const ItemTypes = {
        groupIndex: 'Weight'
    }

    const weightComp = (provided = null) => (<div 
            className={styles.weight}
            {...(provided?provided.draggableProps:{})}
            {...(provided?provided.dragHandleProps:{})}
    >
        {showAnswer && (weight.weight === 10 || weight.weight === 1)?<div className={styles.answer}>내가 제일 {weight.weight === 10?'무거':'가벼'}워!</div>:null}
        <img data-index={groupIndex} style={{ margin: "-10px" }} onClick={_=>onClick(weight)} key={weight.color} src={`/images/05/weight${weight.color}.png`}></img>
    </div>)

    return draggable?<Draggable draggableId={weight.color}>{provided=>weightComp(provided)}</Draggable>:weightComp()
}