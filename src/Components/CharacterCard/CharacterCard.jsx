import React from 'react';

const CharacterCard = ({ name, img, village, birthday, rank }) => {
  return (
    <div className="character-card">
      <img src={img} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <p><strong>Village:</strong> {village}</p>
        <p><strong>Birthday:</strong> {birthday}</p>
        <p><strong>Rank:</strong> {rank}</p>
      </div>
    </div>
  );
};

export default CharacterCard;




