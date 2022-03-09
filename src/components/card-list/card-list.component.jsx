import Card from "../card/card.component";
import './card-list.styles.css'

//this is the Card List component
const CardList = ({ monsters }) => {
    return ( //then we just return the card component
        <div className="card-list">
            {monsters.map(monster => {
                return <Card monster = {monster}/>;
            })}
        </div>       
    );
}

export default CardList;