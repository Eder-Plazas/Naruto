import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./HomePage.css";
import CharacterCard from '../../Components/CharacterCard/CharacterCard';

const HomePage = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://dattebayo-api.onrender.com/characters")
            .then(resp => resp.json())
            .then(info => setData(info.characters)); // Ajuste para acceder al array `characters`
    }, []);

    return (
        <div className="characters-home">
            {data.map((element) => (
                <div className="card-home" key={element.id}>
                    <Link to={`/details/${element.id}`}>
                        <CharacterCard name={element.name} img={element.images[0]} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HomePage;











