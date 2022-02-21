import { useNavigate } from 'react-router-dom';

import './home-page-card.styles.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

import { deleteDeck } from "../../helpers/selectors";


const HomePageCard = ({ deckName, deckID, deckList, setDeckList }) => {

    const navigate = useNavigate();

    // const deleteDeckFromDeckList = (deckID) => {
    //     let updatedDeckList = deckList.filter((deck) => deck.id !== deckID);
    //     setDeckList(updatedDeckList);
    //     //AXIOS DELETE DECK HELPER FUNCTION
    // }

    const deleteD = (deckID) =>{
      let updatedDeckList = deckList.filter((deck) => deck.id !== deckID);
      setDeckList(updatedDeckList);
      deleteDeck(deckID)
      .then((result) => console.log("promise to delete deck resolved:", result))
      .catch((error) => console.log(error))

    }

    return (
        <div className='deck-name-container'>
            <span onClick={() => navigate(`/deckpreview/${deckID}`)}>
                {deckName}
            </span>
            <div className='delete-logo-container'>
                <DeleteIcon
                    className='delete-logo'
                    onClick={() => deleteD(deckID)}
                />
            </div>
        </div>
    )
};

export default HomePageCard;
