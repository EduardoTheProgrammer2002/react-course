import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css'

//this is the Card List component
class CardList extends Component{
    render() {
        const { monsters } = this.props; //we stracted the value of props the we passed in app.js
        return ( //then we just return the card component
            <div className="card-list">
                {
                    monsters.map(monster => {
                        return (
                            <Card monster = {monster} />
                        )
                    })
                }
            </div>       
        );
    }
}

export default CardList;