import CharacterCard from "../CharacterCard";
import { Logo, ContainerCatalog } from "../../styles";
import { getCharacters } from "../../graphql/requests";
import { useState, useEffect } from "react";
import LogoRickAndMorty from "../../assets/rm-logo.png"

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
            <Logo src={LogoRickAndMorty} alt="Logo Rick and Morty" />
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