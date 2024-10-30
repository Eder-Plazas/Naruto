import React from 'react';

const CharacterCard = ({ name, img, description }) => {
  return (
    <div className="character-card">
      <img src={img} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;


