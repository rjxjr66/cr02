import Head from "next/head";
import React, { useState } from "react";

const StringEncoder: React.FC = () => {
  const [state, setState] = useState({
    code: [
      [false, false, true, true, true],
      [false, false, true, false, false],
      [false, true, false, true, true],
      [false, true, false, true, true],
      [false, true, true, true, false],
    ],
    decoded: "hello",
  });

  const toggle = (row, col) => {
    state.code[row][col] = !state.code[row][col];
    setState({
      decoded: decode(),
      code: [...state.code],
    });
  };

  const decode = () => {
    return state.code
      .map((row) => {
        return String.fromCharCode(
          row
            .map((col, index) => (col ? 2 ** (4 - index) : 0))
            .reduce((prev, cur) => prev + cur, 0) + "a".charCodeAt(0)
        );
      })
      .join("");
  };

  return (
    <div className="container">
      <Head>
        <title>데이터로 표현하기 / 암호 만들기</title>
      </Head>
      <h1>암호 만들기</h1>
      <style jsx>{`
        td {
          background: transparent;
          text-align: center;
        }

        .map-table tr:nth-child(odd) {
          background: #f4f4f4;
          font-weight: bold;
        }

        .code-table {
          margin-top: 32px;
        }

        .code-table td {
          border: 1px solid;
          height: 100px;
        }

        .code-table td.active {
          background: black;
        }
      `}</style>
      <h2>{state.decoded}</h2>
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
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
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
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
      <table className="code-table">
        <tbody>
          {state.code.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={col ? "active" : ""}
                  onClick={() => toggle(rowIndex, colIndex)}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StringEncoder;
