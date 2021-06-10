import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> 코딩캠퍼스 언플러그드 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to CR02 Course! </h1>

        <p className={styles.description}>
          파이썬과 함께 떠나는 컴퓨터 과학 산책
        </p>

        <div className="container">
          <h3>수업 소개</h3>
          <p>
            스크래치 혹은 다른 블록 프로그래밍으로 코딩을 접해본 학생들을
            대상으로 컴퓨터 과학을 이해하기 쉬운 예제와 여러가지 도구를 사용하여
            설명합니다. 파이썬이라는 언어 자체를 익히는 데 집중하기 보다는
            파이썬을 도구로 컴퓨팅 사고력을 기르고 생각하는 방법을 익힐 수
            있도록 수업을 구성하였습니다. 컴퓨터 과학을 통해 문제를 절차적으로
            해결하는 방법을 배우고 미래 사회의 핵심 인재로 성장하는 학생들을
            길러내기 위해 만들어진 수업입니다.
          </p>

          <h3>수업 목표</h3>
          <ol>
            <li>
              파이썬 프로그래밍의 문법적 요소를 이해하고 활용할 수 있습니다.
            </li>
            <li>
              문제를 계산적으로 해결하고 자동화 하기 위한 절차적 사고력을
              기릅니다.
            </li>
            <li>다양한 실습을 통해 컴퓨터 과학을 직접 체험하며 익힙니다.</li>
          </ol>
        </div>

        <div className={styles.grid}>
          <a href="/chapters/01" className={styles.card}>
            <h3> 01. 컴퓨터과학 시작하기 </h3>
            <ul>
              <li>컴퓨터과학을 시작하기 위한 준비운동을 해봅시다.</li>
              <li>파이썬 코드를 실행하는 방법을 배웁니다.</li>
              <li>컴퓨터가 할 수 있는 두 가지 일에 대해 배웁니다.</li>
            </ul>
          </a>
          <a href="/chapters/02" className={styles.card}>
            <h3> 02. 데이터로 표현하기 </h3>
            <ul>
              <li>컴퓨터가 데이터를 저장하는 방법을 배웁니다.</li>
              <li>
                0과 1로 여러가지 데이터를 표현하기 위해 규칙을 만들어 봅시다.
              </li>
            </ul>
          </a>
          <a href="/chapters/03" className={styles.card}>
            <h3> 03. 논리적으로 생각하기 </h3>
            <ul>
              <li>논리와 관련된 수학을 배웁니다.</li>
              <li>컴퓨터의 동작에 논리가 어떤 역할을 하는지 이해합니다.</li>
            </ul>
          </a>
          <a href="/chapters/04" className={styles.card}>
            <h3> 04. 반복으로 해결하기 </h3>
            <ul>
              <li>
                컴퓨터의 능력을 이용하여 수 많은 정보를 빠르게 처리하는 방법에
                대해 배웁니다.
              </li>
              <li>
                놀이와 예제를 통해 더 효율적으로 탐색하는 방법에 대해 배웁니다.
              </li>
            </ul>
          </a>
          <a href="/chapters/05" className={styles.card}>
            <h3> 05. 차곡차곡 순서대로 </h3>
            <ul>
              <li>정보를 순서대로 나열해 놓은 순차 데이터를 다뤄봅니다.</li>
              <li>순차 데이터를 탐색하는 방법에 대해 알아봅니다.</li>
              <li>순차 데이터를 정렬하는 정렬 알고리즘에 대해 알아봅니다.</li>
            </ul>
          </a>
          <a href="/chapters/06" className={styles.card}>
            <h3> 06. 실행활 데이터 다루기 </h3>
            <ul>
              <li>
                실생활에서 접할수 있는 여러가지 정보들을 컴퓨터를 활용해서
                저장하고 활용하기 위한 방법들을 배워봅니다.
              </li>
              <li>한 개 이상의 정보로 이루어진 복합 데이터를 다룹니다.</li>
            </ul>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>코딩캠퍼스</footer>
    </div>
  );
}
