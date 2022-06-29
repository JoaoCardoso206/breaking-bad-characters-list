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

                 <div className="character-info">
                    <div className="character-birthday-title">
                        Birthday 
                    </div>
                    <div className="content">
                        {character.birthday}
                    </div>
                </div>

                <div className="character-info">
                    <div className="character-occupation-title">
                        Occupation 
                    </div>
                    <div className="content">
                        {character.occupation}
                    </div>
                </div>

                <div className="character-info">
                    <div className="character-status-title">
                        Status 
                    </div>
                    <div className="content">
                        {character.status}
                    </div>
                </div>

                <div className="character-info">
                    <div className="character-appearances-title">
                        Appearances 
                    </div>
                    <div className="content">
                        {character.appearance}
                    </div>
                </div>

                <div className="character-info">
                    <div className="character-portrayed-title">
                        Portrayed  
                    </div>
                    <div className="content">
                        {character.portrayed}
                    </div>
                </div>
                
                <div className="character-info">
                    <div className="character-category-title">
                        Category 
                    </div>
                    <div className="content">
                        {character.category}
                    </div>
                </div>
             </div>
        </div>
    )

}