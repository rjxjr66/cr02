import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";

const answer = [ true, true, false, true, false, true, false, true, true, true, false, false, false, false, false, false ];

const TruthTable: React.FC = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: { answer: string[] }) => {
        if (data.answer.every((item, index) => (item==='1') === answer[index])) {
            alert('정답입니다!')
        } else {
            alert('다시 시도해보세요.')
        }
    }

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

          select {
            font-size: 18px;
          }

          thead td {
            background: transparent;
          }

          button {
              float: right;
              margin: 8px;
              font-size: 18px;
          }
        `}
      </style>
      <Head>
        <title>논리적으로 생각하기 / 진리표 완성하기</title>
      </Head>
      <h1>진리표 완성하기</h1>
      <p>놀이공원에 왔어요. 범퍼카를 타려고 해요.</p>
      <p>
        범퍼카는 오직 키가 110cm 이상이거나 100cm 이상이면서 동시에 보호자와
        함께 있으면 탈 수 있습니다.
      </p>
      <p>
        놀이공원에서 범퍼카를 탈 수 있는 어린이인지 아닌지를 자동으로 검사하는
        장치를 만드려고 해요.
      </p>
      <p>이 문제를 해결하기 위해 위 문장을 두 개의 명제로 분리해 봅시다!</p>
      <br />
      <p>A: 범퍼카를 탈 수 있다.</p>
      <p>
        B: 키가 110cm 이상이거나 100cm 이상이면서 동시에 보호자와 함께 있다.
      </p>
      <br />
      <p>
        명제 A와 B는 상호조건명제인 관계가 있어요. 따라서 우리는 명제 B의 참
        거짓만 판별하면 됩니다!
      </p>
      <p>명제 B를 조금 더 나누어 볼게요.</p>
      <br />
      <p>B1: 키가 110cm 이상이다.</p>
      <p>B2: 키가 100cm 이상이면서 보호자와 함께 있다.</p>
      <p>A = B1 OR B2</p>
      <br />
      <p>B2는 다시 두 개의 명제로 나눌 수 있겠네요!</p>
      <br />
      <p>B2a: 키가 100cm 이상이다.</p>
      <p>B2b: 보호자와 함께 있다.</p>
      <p>B2 = B2a AND B2b</p>
      <br />
      <p>
        이제 B1 OR (B2a AND B2b) 이 명제식을 평가하면 범퍼카를 탈 수 있는
        어린이인지 검사할 수 있습니다.
      </p>
      <p>
        아래 진리표를 완성하여 어떤 어린이가 범퍼카를 탈 수 있는지 확인해보세요!
      </p>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <thead>
            <tr>
              <td>B1</td>
              <td>B2a</td>
              <td>B2b</td>
              <td>B2a AND B2b</td>
              <td>B1 OR (B2a AND B2b)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>True</td>
              <td>True</td>
              <td>True</td>
              <td>
                <select {...register('answer[0]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
              <td>
                <select {...register('answer[1]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>True</td>
              <td>True</td>
              <td>False</td>
              <td>
                <select {...register('answer[2]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
              <td>
                <select {...register('answer[3]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>True</td>
              <td>False</td>
              <td>True</td>
              <td>
                <select {...register('answer[4]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
              <td>
                <select {...register('answer[5]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>True</td>
              <td>False</td>
              <td>False</td>
              <td>
                <select {...register('answer[6]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
              <td>
                <select {...register('answer[7]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>False</td>
              <td>True</td>
              <td>True</td>
              <td>
                <select {...register('answer[8]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
              <td>
                <select {...register('answer[9]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>False</td>
              <td>True</td>
              <td>False</td>
              <td>
                <select {...register('answer[10]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
              <td>
                <select {...register('answer[11]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>False</td>
              <td>False</td>
              <td>True</td>
              <td>
                <select {...register('answer[12]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
              <td>
                <select {...register('answer[13]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>False</td>
              <td>False</td>
              <td>False</td>
              <td>
                <select {...register('answer[14]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
              <td>
                <select {...register('answer[15]')}>
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default TruthTable;
