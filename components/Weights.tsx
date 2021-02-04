import React from 'react';
import { Weight } from "./types";
import styles from './Weights.module.css';

export function Weights({ items }) {
    return <div className={styles.weights}>
        { items.map((item: Weight) => {
            return <img key={item.color} src={`/images/05/weight${item.color}.png`}></img>
        }) }
    </div>
}