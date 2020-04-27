import React, {Component} from 'react';
import SwapiService from '../../services/';
import './item-list.css';
import Spinner from "../spinner";

export default class ItemList extends Component {
    swapiService = new SwapiService();
    state = {
        peopleList: null,
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({peopleList})
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
                    {item.name}
                </a>
            )
        })
    }

    render() {
        const {peopleList} = this.state;
        if (!peopleList) {
            return <Spinner/>
        }
        const items = this.renderItems(peopleList);
        if (peopleList) {
            return (<div>{items}</div>)
        }
    }
};

