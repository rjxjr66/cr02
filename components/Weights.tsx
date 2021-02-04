import React from 'react';
import { Weight } from '.';
import { IWeight } from "./types";
import styles from './Weights.module.css';

export function Weights({ items, onClick, showAnswer }) {
    return <div className={styles.weights}>
        { items.map((item: IWeight) => {
            return <Weight key={item.color} weight={item} onClick={onClick} showAnswer={showAnswer}></Weight>
        }) }
    </div>
}