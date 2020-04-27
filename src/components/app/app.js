import React, {Component} from 'react';
import Header from "../header";
import RandomPlanet from '../random-planet';
import './app.css';
import StarShipsItemList from '../starships-item-list';
import StarShipDetails from "../starship-details/starship-details";
import {BrowserRouter,Route} from "react-router-dom";
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
            <div className='container'>
                <BrowserRouter>
                    <div>
                        <Header/>
                        {planet}
                        <button className="btn btn-dark m-2"
                                onClick={this.toggleRandomPlanet}>
                            SHOW or HIDE
                        </button>
                    </div>
                    <Route path='/peoples' render={() => <Person/>}/>
                    <div className='row'>
                        <Route path='/starShipsItemList' render={() => <StarShipsItemList/>}/>
                        <Route path='/starShip' render={() => <StarShipDetails/>}/>
                    </div>
                </BrowserRouter>
            </div>

        )
    }
}

export default App;