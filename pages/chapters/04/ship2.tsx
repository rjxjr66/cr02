import Head from "next/head";
import React, { useState } from "react";

const Ship2: React.FC = () => {
  const [state, setState] = useState({
    ship: Array(26)
      .fill(0)
      .map((_) => ({
        revealed: false,
        number: Math.ceil(Math.random() * 5000),
      })).sort((a, b)=>a.number - b.number),
    hide: Math.floor(Math.random() * 26),
    try: 0,
    done: false
  });

  const reveal = (index) => {
    if (!state.done && !state.ship[index].revealed) {
      state.ship[index].revealed = true;
      setState({ ...state, try: state.try + 1 });
      setTimeout(() => {
        if (index === state.hide) {
          alert('정답입니다!');
          setState({ ...state, done: true })
        }
      });
    }
  };

  return (
    <div className="container">
      <Head>
        <title>반복으로 해결하기 / 전함놀이 시즌 2</title>
      </Head>
      <style jsx>{`
        td {
          background: transparent;
          text-align: center;
        }

        .map-table tr:nth-child(odd) {
          background: #f4f4f4;
          font-weight: bold;
        }
      `}</style>
      <h1>전함놀이 시즌 2</h1>
      <p>
        26척의 배 중에 <strong>{ state.ship[state.hide].number }번</strong> 배에 친구가 숨어있습니다. 친구가 숨어 있는 배를
        찾아보세요.
      </p>
      <p>
        규칙은 전함놀이 시즌 2와 같습니다. 하지만 이번엔 배들의 번호가 <strong>오름차순으로 정렬</strong>되어 있습니다!
      </p>
      <p>친구를 찾았나요? 다음 질문에 답변해보세요.</p>
      <ol>
        <li>가장 빨리 찾는다면 몇 번의 시도만에 찾을 수 있습니까?</li>
        <li>가장 늦게 찾는다면 몇 번의 시도만에 찾을 수 있습니가?</li>
        <li>숨어 있는 배를 못 찾는 경우가 있나요?</li>
      </ol>
      <table className="map-table">
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
            <td>g</td>
            <td>h</td>
            <td>i</td>
            <td>j</td>
            <td>k</td>
            <td>l</td>
            <td>m</td>
          </tr>
          <tr>
            {state.ship.slice(0, 13).map((ship, index) => (
              <td onClick={() => reveal(index)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', background: ship.revealed?'#fff':'#000', cursor: ship.revealed?'unset':'pointer' }}>{ship.number}</div>
              </td>
            ))}
          </tr>
          <tr>
            <td>n</td>
            <td>o</td>
            <td>p</td>
            <td>q</td>
            <td>r</td>
            <td>s</td>
            <td>t</td>
            <td>u</td>
            <td>v</td>
            <td>w</td>
            <td>x</td>
            <td>y</td>
            <td>z</td>
          </tr>
          <tr>
            {state.ship.slice(13).map((ship, index) => (
              <td onClick={() => reveal(index + 13)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', background: ship.revealed?'#fff':'#000', cursor: ship.revealed?'unset':'pointer' }}>{ship.number}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div style={{ textAlign: 'right', fontSize: '24px', fontWeight: 'bold', marginTop: '24px' }}>시도횟수: {state.try}</div>
    </div>
  );
};

export default Ship2;