import { ContainerCard, DetailsButton } from "../../styles";
import { getCharacterById } from "../../graphql/requests";

function CharacterCard(props) {

    return (
        <ContainerCard>

            <img alt={props.name} src={props.img} />

            <div className="character-info">
                <p>Name: {props.name}</p>
                <p>Status: {props.status}</p>
            </div>

            <button onClick={""}>Details</button>

        </ContainerCard>
    );
};

export default CharacterCard;