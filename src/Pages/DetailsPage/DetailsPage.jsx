import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { db } from '../../Firebase/Firebase'; // Asegúrate de que esta ruta sea correcta
import { collection, addDoc } from "firebase/firestore"; 
import "./DetailsPage.css"; 

const DetailsPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://dattebayo-api.onrender.com/characters/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error("Error fetching character data:", error));
  }, [id]);

  const handleFavoriteClick = async () => {
    if (character) {
      try {
        await addDoc(collection(db, "favorites"), {
          name: character.name,
          debut: character.debut
        });
        alert(`${character.name} ha sido agregado a favoritos!`);
      } catch (error) {
        console.error("Error al agregar a favoritos: ", error);
        alert(`Error al agregar a favoritos: ${error.message}`);
      }
    }
  };
  

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-details">
      <img src={character.images[0]} alt={character.name} className="character-image" />
      <h1>{character.name}</h1>
      <button className="favorite-button" onClick={handleFavoriteClick}>
        <FavoriteIcon color="error" />
      </button>
      <p><strong>Debut en Manga:</strong> {character.debut.manga}</p>
      <p><strong>Debut en Anime:</strong> {character.debut.anime}</p>
      <p><strong>Familia:</strong></p>
      <ul>
        <li><strong>Padre:</strong> {character.family.father}</li>
        <li><strong>Madre:</strong> {character.family.mother}</li>
        <li><strong>Esposa:</strong> {character.family.wife}</li>
        <li><strong>Hijo:</strong> {character.family.son}</li>
        <li><strong>Hija:</strong> {character.family.daughter}</li>
      </ul>
      <p><strong>Jutsu:</strong> {character.jutsu.join(', ')}</p>
      <p><strong>Tipo de Naturaleza:</strong> {character.natureType.join(', ')}</p>
      <p><strong>Cumpleaños:</strong> {character.personal.birthdate}</p>
      <p><strong>Rango:</strong> {character.rank.ninjaRank.Part_I}</p>
    </div>
  );
};

export default DetailsPage;



