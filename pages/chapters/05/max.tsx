import Head from 'next/head'
import { useState } from 'react'
import { IWeight, BalanceAndWeight } from '../../../components'
import * as _ from 'lodash';

export default function Max() {
    const [ items, setItems ] = useState<IWeight[]>(_.shuffle([1,2,3,4,5,6,7,8,9,10]).map((weight, index)=>{
        return {
            weight,
            color: index + 1
        }
    }));
    const [ showAnswer, setShowAnswer] = useState<boolean>(false);

    return (<div className="container">
        <Head>
            <title>차곡차곡 순서대로 / 최대값 찾기</title>
        </Head>
        <h1>최대값 찾기</h1>
        <p>무게가 서로 다른 10개의 추가 있습니다. 우리는 10개의 추 중에서 가장 무거운 추를 찾아야 합니다.</p>
        <p>양팔 저울을 이용해서 두 개의 추의 무게를 비교할 수 있습니다.</p>
        <p>효율적으로 가장 무거운 추를 찾아내는 알고리즘을 만드려면 어떻게 해야 할지 잘 생각해보며 문제를 해결해 보세요.</p>
        <button onClick={_=>{
            setShowAnswer(!showAnswer);
        }}>정답 {showAnswer?'감추기':'보기'}</button>

        <section className="content">
            <BalanceAndWeight init={items} showAnswer={showAnswer}></BalanceAndWeight>
        </section>
    </div>)
}