import { Injectable } from "@angular/core";
/*import { HEROES } from './mock-heroes';*/
import { Hero } from './hero';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {responseInterceptor} from "angular-in-memory-web-api";
import headersToString = http.headersToString;

@Injectable()
export class HeroService{
    private heroesUrl = 'api/heroes';
    constructor(private http: Http) { }
    getHeroes(): Promise<Hero[]>{

        return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
        /*return Promise.resolve(HEROES);*/
    };

    private handleError(error: any): Promise<any> {
        console.error("an error occured", error);
        return Promise.reject(error.message || error);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve=>setTimeout(resolve, 20)).then(()=> this.getHeroes());

    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url).toPromise().then(response => response.json().data as Hero).catch(this.handleError);
        //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

   private headers = new Headers({'contentType':'application/json'});

    update(hero:Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), {headers: this.headers}).toPromise().then(()=>hero).catch(this.handleError);
    }

    create(name:string): Promise<Hero> {
        return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers:this.headers}).toPromise().then(response => response.json().data).catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers:this.headers}).toPromise().then(() => null).catch(this.handleError);

    }
}