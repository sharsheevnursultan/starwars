import React, {Component} from 'react';
import SwapiService from '../../services/';
import './starships-item-list.css';
import Spinner from "../spinner";

export default class StarShipsItemList extends Component {
    swapiService = new SwapiService();
    state = {
        starShipList: null,
    };

    componentDidMount() {
        this.swapiService
            .getAllStarShips()
            .then((starShipList) => {
                this.setState({starShipList})
            });

    }

    renderItems(arr) {
        console.log(arr);
        return arr.map((item) => {
            const {id} = item;
            return (
                <a className='list-group-item'
                   href="#"
                   onClick={() => this.props.onItemSelected(id)}
                >
                    {item.model}
                </a>

            )
        })
    }

    render() {
        const {starShipList} = this.state;

        if (!starShipList) {
            return <Spinner/>
        }
        const items = this.renderItems(starShipList);

        if (starShipList) {
            return (

                <div className='my-padding'>
                    {items}
                </div>


            )
        }
    }

};

