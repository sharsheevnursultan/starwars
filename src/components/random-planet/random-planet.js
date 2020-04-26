import React, {Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';



export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loader: true,
        error: false,
    };

   componentDidMount() {
       this.updatePlanet();
       this.reloader();

   }

   reloader=()=>{
       setInterval(this.updatePlanet,10000);
   };

    onError = (err) => {
        console.log('Text', err);
        this.setState(
            {
                error: true,
                loader: false
            }
        )
    };


   onPlanetLoaded=(planet)=>{
           this.setState({
               planet,
               loader: false,

           });
           console.log(planet)
       };

    updatePlanet=()=> {


        let id = Math.floor(Math.random() * 10) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };

    render() {
        const {planet, loader, error} = this.state;
        const spinner = loader ? <Spinner/> : null;
        const hasData = !(loader || error);
        const content = hasData ? <PlanetView planet={planet}/> : null;
        const notFoundError = error ? <ErrorIndicator/> : null;

        return (
            <div id='id-random-planet' className='random-planet jumbotron rounded'>
                {spinner}
                {content}
                {notFoundError}
            </div>
        );
    }
}
const PlanetView = ({planet}) => {
    const {name, population, rotationPeriod, diameter, id} = planet;

    return (
        <React.Fragment>
            <img className='planet-image'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt='No image'/>
            <div>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};