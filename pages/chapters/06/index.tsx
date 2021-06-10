import Head from 'next/head';
import React from 'react';

const Chapter6: React.FC = () => {
    return (<div className="container">
        <Head>
            <title>실생활 데이터 다루기</title>
        </Head>
        <ul className="index">
            <a href="05/encoder"><li>인코더</li></a>
            <a href="05/decoder"><li>디코더</li></a>
        </ul>
    </div>)
}

export default Chapter6;