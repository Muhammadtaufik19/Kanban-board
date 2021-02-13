import React from "react";
import "../sass/Board.scss";
import BoardTitle from "./BoardTitle";
import menu from "../assests/menu.png";
import Card from "./Card";
import Button from "./Button";

const Board = ({ data }) => {
  return (
    <div className="board">
      <div className="board__title">
        <BoardTitle title={data.title} id={data.id} />
        <div className="menu">
          <img src={menu} alt="menu" />
        </div>
      </div>
      {data.cards.map((card, index) => (
        <Card key={card.id} item={card} id={data.id} index={index} />
      ))}
      <Button />
    </div>
  );
};

export default Board;
