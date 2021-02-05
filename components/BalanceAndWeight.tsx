import { useEffect, useState } from 'react'
import { Weights, Balances, IWeight } from '.'

export function BalanceAndWeight({ init, showAnswer }) {
    const [ weights, setWeights ] = useState<IWeight[]>([]);
    const [ items, setItems ] = useState<IWeight[]>(init);
    const [ count, setCount ] = useState<number>(0);

    useEffect(() => {
        if (weights.length == 2) {
            setCount(count + 1);
        }
    }, [ weights ])

    const pick = (weight: IWeight) => {
        if (weights.length < 2) {
            setWeights([ ...weights, weight ])
            const index = items.findIndex(item=>item === weight);
            setItems([ ...items.slice(0, index), ...items.slice(index + 1) ])
        } 
    }

    const remove = (index) => {
        setWeights([ ...weights.slice(0, index), ...weights.slice(index + 1) ])
        setItems([ ...items, weights[index] ])
    }

    return <>
        <Balances weights={weights} onClick={remove} showAnswer={showAnswer}></Balances>
        <Weights items={items} onClick={pick} showAnswer={showAnswer}></Weights>
        <h2 style={{ textAlign: 'right' }}>비교 횟수 : {count}회</h2>
    </>
}