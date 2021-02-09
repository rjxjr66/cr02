import React, { useState } from "react";
import Head from 'next/head'
import { BalanceAndWeight, IWeight, Weight, Weights } from "../../../components";
import * as _ from 'lodash';
import styles from './quick-sort.module.css';

const items = _.shuffle([1,2,3,4,5,6,7,8,9,10]).map((weight, index)=>{
    return {
        weight,
        color: index + 1
    }
});

export default function QuickSort() {
    const [ partition, setPartition ] = useState<any>([ items ])
    const [ state, setState ] = useState<{ current: number, picked: boolean }>({
        current: 0,
        picked: false
    });
    const [ sorted, setSorted ] = useState<boolean>(false);

    const pick = (items: IWeight[], item: IWeight) => {
        if (!state.picked) {
            const groupIndex = partition.findIndex(_=>_===items);
            const index = items.findIndex(_=>_===item);
            const newPartition = [ ...partition ]

            newPartition[groupIndex] = [ items.slice(0, index), item, items.slice(index + 1) ]
            newPartition.splice(groupIndex, 1, ...newPartition[groupIndex])

            setPartition(newPartition)
            setState({
                current: newPartition.findIndex(_=>_===item),
                picked: true
            })
        }
    }

    const onDrop = (e) => {
        e.stopPropagation();

        const targetGroup = e.target.dataset.index
        const { groupIndex, index } = JSON.parse(e.dataTransfer.getData('application/json'));

        const newPartition = [ ...partition ]
        newPartition[targetGroup].push(newPartition[groupIndex][index]);
        newPartition[groupIndex].splice(index, 1);

        setPartition(newPartition);

        return false;
    }

    const check = () => {
        let bool = true;
        for (let item of partition[state.current + 1]) {
            if (partition[state.current].weight > item.weight) {
                bool = false;
                break;
            }
        }

        if (!bool) {
            alert("다시 시도해보세요!")
            return;
        }

        for (let item of partition[state.current - 1]) {
            if (partition[state.current].weight < item.weight) {
                bool = false;
                break;
            }
        }

        if (!bool) {
            alert("다시 시도해보세요!")
            return;
        }

        const newPartition = [ ...partition ]
        let offset = 0;
        for (let index of [ state.current - 1, state.current + 1 ]) {
            if (newPartition[index + offset].length === 0) {
                newPartition.splice(index + offset, 1);
                offset -= 1;
            } else if (newPartition[index + offset].length === 1) {
                newPartition[index + offset] = newPartition[index + offset][0]
            }
        }

        setPartition(newPartition)
        setState({
            ...state,
            picked: false
        })

        let sorted = true;
        for (let item of newPartition) {
            if (item instanceof Array) {
                sorted = false;
                break;
            }
        }

        if (sorted) {
            setSorted(true);
        }
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const move = (index) => {
        return state.picked && (index===state.current-1 || index===state.current+1)
    }

    return <div className="container">
        <Head>
            <title>차곡차곡 순서대로 / 퀵정렬 알고리즘</title>
        </Head>
        <h1>퀵정렬 알고리즘</h1>
        <p>선택정렬보다 더 빠른 알고리즘인 퀵 정렬 알고리즘에 대해 알아봅시다.</p>
        <p>실제로 퀵 정렬은 알려져 있는 정렬방법 중에 가장 좋은 방법의 하나입니다.</p>
        <p>아래 지시대로 수행한 뒤 모두 몇 번 비교해서 정렬했는지 선택 정렬 알고리즘과 비교해보세요.</p>

        <section className="content">
            {sorted?(
                <p className={styles.instruction}>정렬되었습니다!</p>
            ):(state.picked?(
                <p className={styles.instruction}>저울을 이용해 기준이 될 추 보다 가벼운 추는 왼쪽, 무거운 추는 오른쪽으로 옮기세요. 다 옮겨졌으면, 다음 버튼을 클릭하세요.</p>
            ):(
                <p className={styles.instruction}>기준이 될 추를 하나 고르세요.</p>
            ))}
            <div className={styles.weights}>
                { partition.map((items, index)=>{
                    if (!(items instanceof Array)) {
                        return <div key={index} className={styles.fixed}>
                            <Weight weight={items} onClick={_=>_} showAnswer={false}></Weight>
                        </div>
                    } else {
                        return <div key={index} 
                            className={[move(index)?styles.current:'', move(index)?'droppable':''].join(' ')}
                            onDrop={onDrop} onDragOver={onDragOver}
                            data-index={move(index)?index:null}
                        >
                            <Weights 
                                draggable={move(index)}
                                groupIndex={index}
                                onClick={item=>pick(items, item)} items={items}>    
                            </Weights>
                        </div>
                    }
                }) }
            </div>
            {state.picked?<div className={styles.check} onClick={check}><button>다음</button></div>:null}
            <BalanceAndWeight init={items} showAnswer={false}></BalanceAndWeight>
        </section>
    </div>
}