import Head from 'next/head'
import * as _ from 'lodash';
import * as Parser from '../../../lib/parser';
import { useState } from 'react';

import styles from './basket.module.css';

const index = {
    "BASKET_RED": 0,
    "BASKET_GREEN": 1,
    "BASKET_BLUE": 2
}

export default function Basket() {
    const [baskets, setBaskets] = useState<string[]>(['basketball', 'soccerball', null]);
    const [code, setCode] = useState<string>("");

    const onChange = (e) => {
        setCode(e.target.value)
    }

    const run = async () => {
        if (!code) {
            alert('먼저 코드를 입력하세요..')
            return;
        }

        const init = ['basketball', 'soccerball', null];
        try {
            const parsed = Parser.parse(code);
            let error = false
            for (let cmd of parsed) {
                if (!init[index[cmd[0]]]) {
                    alert('바구니에 옮길 공이 없습니다.')
                    error = true
                    break
                }
                if (init[index[cmd[1]]]) {
                    alert('한 바구니에는 한 개의 공만 넣을 수 있습니다.')
                    error = true
                    break
                }

                init[index[cmd[1]]] = init[index[cmd[0]]]
                init[index[cmd[0]]] = null
            }

            setBaskets(init);
            if (!error) {
                if (init[0] === 'soccerball' && init[1] === 'basketball') {
                    alert("정답입니다!");
                } else {
                    alert("다시 시도해보세요 ㅠ");
                }
            }
            
        } catch (err) {
            alert("코드에 오류가 있습니다.")
        }
    }

    const reset = () => {
        setBaskets(['basketball', 'soccerball', null]);
    }


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
        <p>ex) move(BASKET_RED, BASKET_GREEN) : 빨간 바구니에 든 공을 초록 바구니로 옮기는 코드입니다.</p>

        <section className="content">
            <div className={styles.basket}>
                <div className={styles.baskets}>
                    {baskets.map((ball, index)=>{
                        return <div key={index}>
                            {ball?<img className={styles.ball} src={`/images/01/${ball}.png`}></img>:''}
                            <img style={{ width: '100px' }} src={`/images/01/basket${index}.png`}></img>
                        </div>
                    })}
                </div>
                <div>
                    <button onClick={run}>실행</button>
                    <button onClick={reset}>바구니 초기화</button>
                    <textarea placeholder="여기에 코드를 입력하세요.." 
                        onChange={onChange} cols={30} rows={10} value={code}>
                    </textarea>
                </div>
            </div>
        </section>
    </div>)
}