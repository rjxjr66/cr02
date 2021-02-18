import React from 'react';
import { Weight } from '.';
import { IWeight } from "./types";
import styles from './Weights.module.css';

interface IWeightsProps {
    items: any,
    onClick?: (any)=>any,
    showAnswer?: boolean,
    draggable?: boolean,
    groupIndex?: number
}

export const Weights:React.FC<IWeightsProps> = ({ items, onClick = _=>_, showAnswer = false, draggable = false, groupIndex = null }) => {
    return <div className={styles.weights} data-index={groupIndex}>
        { items.map((item: IWeight, index: number) => {
            return <Weight draggable={draggable} key={item.color} weight={item} onClick={onClick} showAnswer={showAnswer} groupIndex={groupIndex} index={index}></Weight>
        }) }
    </div>
}