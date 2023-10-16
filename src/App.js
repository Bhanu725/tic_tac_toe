import { useState } from "react";
function Square({ value, onsquareclick }) {
  return (
    <button className="square" onClick={onsquareclick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [xisnext, setxisnext] = useState(true);
  // let result = null;
  function handleclick(i) {
    // result = winner(squares);
    const cursquares = squares.slice();
    if (cursquares[i] || Calculatewinner(squares)) {
      return;
    }
    if (xisnext) cursquares[i] = "X";
    else cursquares[i] = "O";
    setsquares(cursquares);
    setxisnext(!xisnext);
    // if (winner(squares) != null) result = winner(squares);
  }
  const winner = Calculatewinner(squares);
  let status;
  if (winner) {
    status = "Winner is" + winner;
  } else {
    status = "Next player is : " + (xisnext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onsquareclick={() => handleclick(0)} />
        <Square value={squares[1]} onsquareclick={() => handleclick(1)} />
        <Square value={squares[2]} onsquareclick={() => handleclick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onsquareclick={() => handleclick(3)} />
        <Square value={squares[4]} onsquareclick={() => handleclick(4)} />
        <Square value={squares[5]} onsquareclick={() => handleclick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onsquareclick={() => handleclick(6)} />
        <Square value={squares[7]} onsquareclick={() => handleclick(7)} />
        <Square value={squares[8]} onsquareclick={() => handleclick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  return (
    <div className="game">
      <div className="board">
        <Board/>
      </div>
      <div className=""></div>
    </div>
  );
}
function Calculatewinner(squares) {
  const pattren = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < pattren.length; i++) {
    const [a, b, c] = pattren[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[i];
    }
  }
  return null;
}
