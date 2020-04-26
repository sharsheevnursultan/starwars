import React, {Component} from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './person.css'

class Person extends Component {
    state = {
        selectedPerson: 1
    };
    onPersonSelected = (id) => {
        this.setState({selectedPerson: id})

    };

    render() {
        return (
            <div>
                <div className='display-flex' >
                    <div >
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>


                </div>

            </div>
        )

    }
}

export default Person;