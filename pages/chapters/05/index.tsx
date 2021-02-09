import Head from 'next/head'

export default function Chapter5() {
    return (
        <div className="container">
            <Head>
                <title>차곡차곡 순서대로</title>
            </Head>
            <ul className="index">
                <a href="05/max"><li>최대값 찾기</li></a>
                <a href="05/sort"><li>정렬하기</li></a>
                <a href="05/quick-sort"><li>퀵정렬 알고리즘</li></a>
            </ul>
        </div>
    )
}