import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
//import Pagination from '@material-ui/lab/Pagination';

export const Logo = styled.img`
  max-width: 50%;
  align-self: center;
  padding-bottom: 1em;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em;
  width: 15em;
  background-color: #62A4AB;
  border: 3px solid rgba(28, 110, 164, 0.28);
  border-radius: 15px;
  opacity: 0.7;
  transition: 0.8s all ease-out;
  &:hover {
    opacity: 1.0;
  }

  img {
    border-radius: 15px 15px 0px 0px;
    width: 100%;
    min-width: 100%;
  }

  .character-info {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }

  p, strong {
    background-color: #62A4AB;
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

@media screen and (max-width: 768px) {
  padding: 0;
}
`;

export const StyledModal = styled(Modal)`
  background-color: transparent;
  text-align: center;

  h2, h4 {
    margin: 0.3em 0;
  }
 
  .episodes {
    margin-bottom: 0.2em;
    max-height: 20vh;
    overflow-y: scroll;
    border: 1px outset grey;   

    li {
      font-style: italic;
      margin-bottom: 0.1em;
    }
  }
`;

export const Button = styled.button`
  z-index: 1;
  position: relative;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #346a83;
  font-size: 1em;
  border-radius: 15px 15px;

  :hover {
    cursor: pointer;
    font-weight: bolder;
    letter-spacing: 1px;
  }
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
    position: "absolute",
    width: 400,
    maxHeight: 700,
    border: "1px solid #000",
    padding: theme.spacing(1),
  },
}));