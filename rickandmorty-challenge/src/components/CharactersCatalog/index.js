import CharacterCard from "../CharacterCard";
import { ContainerCatalog } from "../../styles";
import { getCharacters } from "../../graphql/requests";
import { useState, useEffect } from "react";

function CharactersCatalog() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
            .then((result) => {
                setCharacters(result);
            });
    }, []);

    return (
        <ContainerCatalog>
            <div className="cards">
                {characters &&
                    characters.map((character) => {
                        return (
                            <CharacterCard
                                id={character.id}
                                img={character.image}
                                name={character.name}
                                status={character.status}
                            />
                        );
                    })}
            </div>

        </ContainerCatalog>
    );
};

export default CharactersCatalog;