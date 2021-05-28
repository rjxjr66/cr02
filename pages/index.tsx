import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (<div className={styles.container} >
        <Head>
            <title> 코딩캠퍼스 언플러그드 </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main} >
            <h1 className={styles.title} >
                Welcome to CR02 Course! </h1>

            <p className={styles.description} >파이썬과 함께 떠나는 컴퓨터 과학 산책</p>

            <div className={styles.grid} >
                <a href="/chapters/01" className={styles.card} >
                    <h3> 01. 컴퓨터과학 시작하기 </h3>
                    <ul> 
                        <li>컴퓨터과학을 시작하기 위한 준비운동을 해봅시다.</li>
                        <li>파이썬 코드를 실행하는 방법을 배웁니다.</li>
                        <li>컴퓨터가 할 수 있는 두 가지 일에 대해 배웁니다.</li>
                    </ul>
                </a>
                <a href="/chapters/02" className={styles.card} >
                    <h3> 02. 데이터로 표현하기 </h3>
                    <ul> 
                        <li>컴퓨터가 데이터를 저장하는 방법을 배웁니다.</li>
                        <li>0과 1로 여러가지 데이터를 표현하기 위해 규칙을 만들어 봅시다.</li>
                    </ul>
                </a>
                <a href="/chapters/05" className={styles.card} >
                    <h3> 05. 차곡차곡 순서대로 </h3>
                    <ul> 
                        <li>정보를 순서대로 나열해 놓은 순차 데이터를 다뤄봅니다.</li>
                        <li>순차 데이터를 탐색하는 방법에 대해 알아봅니다.</li>
                        <li>순차 데이터를 정렬하는 정렬 알고리즘에 대해 알아봅니다.</li>
                    </ul>
                </a>
            </div>
        </main>
        <footer className={styles.footer} >
            코딩캠퍼스
        </footer>
    </div>)
}