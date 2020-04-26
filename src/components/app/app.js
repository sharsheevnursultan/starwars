import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from '../random-planet';
import './app.css';
import StarShipsItemList from '../starships-item-list';
import StarShipDetails from "../starship-details/starship-details";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Person from '../person'


class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 2,
        selectedStarShip: 15
    };
    toggleRandomPlanet = () => {
        this.setState({showRandomPlanet: !this.state.showRandomPlanet})
    };

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id})
    };

    onStarShipSelected = (id) => {
        this.setState({selectedStarShip: id})
    };

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        return (
            <div>
                <Router>
                    <Header/>
                    {planet}
                    <button className="btn-danger btn-alert"
                            onClick={this.toggleRandomPlanet}>
                        SHOW or HIDE
                    </button>
                    <div className='row'>
                        <Route path='/itemList' component={Person}/>
                    </div>
                    <div className='row'>
                        <Route path='/starShipsItemList' component={StarShipsItemList}/>
                        <Route path='/starShip' component={StarShipDetails}/>
                    </div>
                </Router>
            </div>

        )
    }
}

export default App;