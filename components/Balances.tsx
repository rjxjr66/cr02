import React from 'react';
import { Weight } from '.';
import styles from './Balances.module.css';

export function Balances({ weights, onClick, showAnswer }) {
    const state = ((weights)=>{
        if (weights.length == 0) {
            return 0;
        } else if (weights.length == 1) {
            return -1;
        } else {
            if (weights[0].weight == weights[1].weight) {
                return 0;
            } else {
                return weights[0].weight > weights[1].weight ? -1 : 1;
            }
        }
    })(weights)

    return (
        <div className={styles.balances} >
            <img className={styles.arms} style={ { "transform": `translateX(-50%) rotate(${state * 10}deg)` } } src="/images/05/arms.png"></img>
            <img className={styles.pole} src="/images/05/pole.png"></img>
            <div className={styles.plateContainer} style={ { "transform": `translateY(${state * -50}px)` } }>
                <img className={styles.plate} src="/images/05/plate.png"></img>
                { weights.length > 0 ? <Weight weight={weights[0]} onClick={_=>onClick(0)} showAnswer={showAnswer}></Weight> : null }
            </div>
            <div className={styles.plateContainer} style={ { "transform": `translateY(${state * 50}px)` } }>
                <img className={styles.plate} src="/images/05/plate.png"></img>
                { weights.length > 1 ? <Weight weight={weights[1]} onClick={_=>onClick(1)} showAnswer={showAnswer}></Weight> : null }
            </div>
        </div>
    )
}