export default class SwapiService {
    async getResource(url) {
        const res = await fetch(`https://swapi.co/api${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this.transformPerson);

    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this.transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this.transformPlanet(planet)
    }

    async getAllStarShips() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this.transformStarShips);
    }

    async getStarShip(id) {
        const starShip = await  this.getResource(`/starships/${id}/`);
        return this.transformStarShips(starShip);
    }

    extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    transformPlanet = (planet) => {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    transformPerson = (person) => {

        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color

        }
    };

    transformStarShips=(starships)=> {

        return {
            id: this.extractId(starships),
            name: starships.id,
            model: starships.model,
            manufacturer: starships.manufacturer,
            costInCredits: starships.cost_in_credits,
            length: starships.length,
            crew: starships.crew,
            passengers: starships.passengers,
            cargoCapacity: starships.cargo_capacity


        }
    }


}