import React from "react";
import Image from 'next/image'
import TryAgainLogo from "../../public/try-again.gif";

const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    return (
      <div className="gameOver" onClick={onRestart}>
        <Image
          src={TryAgainLogo}
          alt="Try Again"
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </div>
    );
  }

  return null;
};

export default GameOverlay;