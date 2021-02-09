import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { IWeight, Weight } from '.';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({value})=> <Weight weight={value} showAnswer={false} onClick={_=>_} ></Weight>)
const SortableList = SortableContainer(( {items }) => {
    return  (<div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {
            items.map((value, index)=>{
                return <SortableItem key={value.color} index={index} value={value}></SortableItem>
            })
        }
    </div>)
});

export function SortableWeights({ weights }) {
    const [ _weights, setweights ] = useState<IWeight[]>(weights);
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setweights(arrayMove(_weights, oldIndex, newIndex))
    }

    const checkAnswer = () => {
        let correct = true;
        for (let i = 0; i < _weights.length - 1; i++) {
            if (_weights[i].weight > _weights[i+1].weight) {
                correct = false;
                break;
            }
        }

        console.log(_weights.map(_=>_.weight))
        alert(correct?`완벽해요, 추들이 잘 정렬되었습니다!`:`정렬이 안되어있어요 ㅠ 다시 시도해보세요..`)
    }

    return <div style={{ background: '#f4f4f4', padding: '8px 16px' }}>
        <h3>드래그해서 정렬해보세요!</h3>
        <SortableList axis='x' items={_weights} onSortEnd={onSortEnd}></SortableList>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><button onClick={checkAnswer}>정답확인</button></div>
    </div>
}