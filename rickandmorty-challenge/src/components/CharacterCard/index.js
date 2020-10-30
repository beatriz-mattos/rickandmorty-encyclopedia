import { ContainerCard, StyledModal, useStyles, Button, LoadingGif, ImageCard } from "../../styles";
import { getCharacterById } from "../../graphql/requests";
import { useState } from "react";

function CharacterCard(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [characterInfo, setCharacterInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleModal = (id) => {
        setLoading(true);

        getCharacterById(id).then((res) => {
            setLoading(false);
            setOpen(true);
            setCharacterInfo(res);
        });
    };

    const closeModal = () => { setOpen(false) };

    return (
        <ContainerCard>

            {loading && <LoadingGif alt="loading..." src={"https://i.imgur.com/GLdqYB2.gif"} />};

            <ImageCard alt={props.name} src={props.img} />

            <div className="character-info">
                <p><strong>{props.name}</strong></p>
                <p>{props.status}</p>
            </div>

            <Button onClick={() => handleModal(props.id)}>Details</Button>

            <StyledModal open={open}>
                <div className={classes.root}>

                    <img alt={characterInfo.name} src={characterInfo.image} />

                    <h2>{characterInfo.name}</h2>

                    <h4>
                        {characterInfo.episode && characterInfo.episode.length <= 1 ? "Episode" : "Episodes"}
                    </h4>

                    <ul className="episodes">
                        {characterInfo.episode &&
                            characterInfo.episode.map((ep) => {
                                return <li key={ep.name}>{ep.name}</li>
                            })
                        }
                    </ul>

                    <Button onClick={closeModal}>Go back</Button>

                </div>
            </StyledModal>

        </ContainerCard>
    );
};

export default CharacterCard;