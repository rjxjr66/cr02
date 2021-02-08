import Head from 'next/head'

export default function Chapter5() {
    return (
        <div className="container">
            <Head>
                <title>컴퓨터과학 시작하기</title>
            </Head>
            <ul className="index">
                <a href="01/basket"><li>공 옮기기</li></a>
            </ul>
        </div>
    )
}