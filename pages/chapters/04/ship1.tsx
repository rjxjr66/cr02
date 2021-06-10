import Head from "next/head";
import React from "react";

const Ship1: React.FC = () => {
  return (
    <div className="container">
      <style jsx>
        {`
          td {
            background: #f4f4f4;
            text-align: center;
            font-size: 18px;
            padding: 8px;
          }
        `}
      </style>
      <Head>
        <title>반복으로 해결하기 / 전함놀이 시즌 1</title>
      </Head>
      <p>작업중입니다 ㅠㅠ</p>
    </div>
  );
};

export default Ship1;
