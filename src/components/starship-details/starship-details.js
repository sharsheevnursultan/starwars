import React, {Component} from 'react';
import './starship-details.css';
import SwapiService from '../../services/';

export default class StarShipDetails extends Component {
    swapiService = new SwapiService();
    state = {
        personInfo: null
    };

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    updatePerson() {
        this.swapiService
            .getStarShip(this.props.personId)
            .then((personInfo) => {
                this.setState({personInfo})
            });
    }

    render() {
        const {personInfo} = this.state;
        if (!personInfo) {
            return <span> Select StarShip from list</span>
        }
        return (
            <div className='row'>
                <div className='col-md-6 person-details card'>
                    <img className='person-image'
                         src={`https://starwars-visualguide.com/assets/img/starships/${this.props.personId}.jpg`}
                         alt="Picture absent"/>
                </div>
                <div className='col-md-6 card-body'>
                    <h4 className='person-term'>
                        {personInfo.model}
                    </h4>
                    <ul className="list-group list-group-flush ">
                        <li className='list-group-item'>
                            <span className='person-term'>Manufacturer: </span>
                            <span>{personInfo.manufacturer}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='person-term'>Crew: </span>
                            <span>{personInfo.crew}</span>
                        </li>
                        <button className="btn-danger btn-alert"><h4>Throw error</h4></button>
                    </ul>
                </div>
            </div>
        )
    }
};

