import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import './styles.scss';

export function Character(){

    const {id} = useParams();

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        async function getCharacter(){
            const response = await fetch(`https://breakingbadapi.com/api/characters/${id}`);
            const data = await response.json();
            console.log(data[0]);
            setCharacter(data[0]);
        }
        getCharacter();
    }, [id])

    return(
        
        <div className="character-conteiner">
                <div className="character-aside">
                    <div className="character-aside-image">
                        <img src={character.img} alt= {character.name} />
                </div>
             </div>
             <div className="character-main">
                 <div className="character-name">
                     <h1>{character.name}</h1>
                     <h2>{character.nickname}</h2>
                 </div>
                <div className="character-birthday">
                    Birthday {character.birthday}
                </div>
                <div className="character-ocupation">
                    Occupation {character.occupation}
                </div>
                <div className="character-status">
                    Status {character.status}
                </div>
                <div className="character-appearances">
                    Appearances {character.appearance}
                </div>
                <div className="character-portrayed">
                    Portrayed {character.portrayed}
                </div>
                <div className="character-category">
                   <a>Category</a> {character.category}
                </div>
             </div>
        </div>
    )

}