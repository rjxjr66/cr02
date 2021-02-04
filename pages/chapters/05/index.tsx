import Head from 'next/head'

export default function Chapter5() {
    return (
        <div className="container">
            <Head>
                <title>차곡차곡 순서대로</title>
            </Head>
            <ul>
                <li><a href="05/max">최대값 찾기</a></li>
                <li>정렬 알고리즘</li>
            </ul>
        </div>
    )
}