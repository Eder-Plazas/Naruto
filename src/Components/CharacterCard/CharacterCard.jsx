import React from 'react';

const CharacterCard = ({ name, img }) => {
  return (
    <div className="character-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default CharacterCard;

