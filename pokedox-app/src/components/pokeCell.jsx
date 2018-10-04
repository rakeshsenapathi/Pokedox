import React from "react";
import "../styles/PokeClass.css";
import sprites from "../assets/sprites.png";

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
  return (
    <button
      style={style}
      onClick={() => handleOnClick(id)}
      className="poke-cell"
    />
  );
};

export default PokeCell;
