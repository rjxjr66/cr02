import React from "react";
import Head from 'next/head'
import { BalanceAndWeight } from "../../../components";
import * as _ from 'lodash';
import { SortableWeights } from "../../../components/SortableWeights";

const items = _.shuffle([1,2,3,4,5,6,7,8,9,10]).map((weight, index)=>{
    return {
        weight,
        color: index + 1
    }
});

export default function Sort() {
    return (<div className="container">
        <Head>
            <title>차곡차곡 순서대로 / 정렬하기</title>
        </Head>
        <h1>정렬하기</h1>
        <p>무게가 서로 다른 10개의 추가 있습니다. 우리는 10개의 추를 가벼운 추 부터 무거운 추 순서로 정렬해야 합니다.</p>
        <p>양팔 저울을 이용해서 두 개의 추의 무게를 비교할 수 있습니다.</p>
        <p>순서를 알았으면 아래 회색 박스에서 추를 정렬하고 정답확인 버튼을 클릭하세요!</p>
        <p>효율적으로 정렬하는 알고리즘을 만드려면 어떻게 해야 할지 잘 생각해보며 문제를 해결해 보세요.</p>

        <section className="content">
            <SortableWeights weights={items}></SortableWeights>
            <BalanceAndWeight init={items} showAnswer={false}></BalanceAndWeight>
        </section>
    </div>)
}