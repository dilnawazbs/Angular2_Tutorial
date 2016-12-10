import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 1, name: 'Sayyad'},
            {id: 2, name: 'Dil'},
            {id: 3, name: 'Nawaz'},
            {id: 4, name: 'Shahnawaz'},
            {id: 5, name: 'Mumtaz'},
            {id: 6, name: 'Begum'},
            {id: 7, name: 'Afnaz'},
            {id: 8, name: 'Gulnaz'},
            {id: 9, name: 'Ahil'},
            {id: 10, name: 'Aliya'}];
        return { heroes };
    }

}