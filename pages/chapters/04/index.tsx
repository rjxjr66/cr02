import Head from 'next/head';
import React from 'react';

const Chapter4: React.FC = () => {
    return (<div className="container">
        <Head>
            <title>반복으로 해결하기</title>
        </Head>
        <ul className="index">
            <a href="04/ship1"><li>전함놀이 시즌 1</li></a>
            <a href="04/ship2"><li>전함놀이 시즌 2</li></a>
        </ul>
    </div>)
}

export default Chapter4;