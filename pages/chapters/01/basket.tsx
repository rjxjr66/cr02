import Head from 'next/head'
import * as _ from 'lodash';
import * as Parser from './parser';

export default function Basket() {
    console.log(Parser.parse(`move(BASKET_RED, BASKET_GREEN)
    move(BASKET_RED, BASKET_GREEN)
    move(BASKET_RED, BASKET_GREEN)
    move(BASKET_RED, BASKET_GREEN)`));

    return (<div className="container">
        <Head>
            <title>컴퓨터과학 시작하기 / 공 옮기기</title>
        </Head>
        <h1>공 옮기기</h1>
        <p>빨간 바구니, 초록 바구니, 파랑 바구니가 있어요.</p>
        <p>빨간 바구니에는 축구공이, 초록 바구니에는 농구공이 들어있습니다.</p>
        <p><strong>목표</strong> 빨간 바구니에는 농구공, 초록 바구니에는 축구공을 담아야해요.</p>
        <p><strong>제약조건</strong></p>
        <ul>
            <li>한 바구니에는 한 개의 공만 담을 수 있습니다.</li>
            <li>한번에 한 공만 옮길 수 있습니다.</li>
            <li>공은 바구니에만 담을 수 있습니다. (바닥에 놓을 수 없습니다.)</li>
        </ul>
        <p>목표를 달성하기 위한 알고리즘을 주어진 의사코드를 사용하여 작성해야 합니다.</p>
        <table>
            <caption>아래의 코드만 사용할 수 있습니다.</caption>
            <thead>
                <tr>
                    <th>코드</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BASKET_RED</td>
                    <td>빨간 바구니를 나타냅니다.</td>
                </tr>
                <tr>
                    <td>BASKET_GREEN</td>
                    <td>초록 바구니를 나타냅니다.</td>
                </tr>
                <tr>
                    <td>BASKET_BLUE</td>
                    <td>파란 바구니를 나타냅니다.</td>
                </tr>
                <tr>
                    <td>move(a, b)</td>
                    <td>a 바구니에 든 공을 b 바구니로 옮깁니다.</td>
                </tr>
            </tbody>
        </table>

        <section className="content">

        </section>
    </div>)
}