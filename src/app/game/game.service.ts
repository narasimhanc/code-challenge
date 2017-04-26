import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

    constructor(private http: Http, private jsonp: Jsonp) {}

    //returns two cards from a single deck.
    getDeck(){
        return this.http.get('http://deckofcardsapi.com/api/deck/new/draw/'+
        '?count=2').map(
            (res) =>{
              let data = res.json();
              return data.cards;
            }
        );
    }

}
