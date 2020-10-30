import styled from "styled-components";

export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
border: 1px solid grey;

img {
    width: 12em;
}

.character-info {
    display: flex;
    flex-direction: column;
}
`;

export const ContainerCatalog = styled.div`
display: flex;
flex-direction: column;

.cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
`;