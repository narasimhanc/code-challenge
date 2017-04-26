import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {

    constructor(private http: Http, private jsonp: Jsonp) {}

    //get Movie Details of favourite movie.
    getFavouriteMovieDetails(){
      return this.http.get('https://api.themoviedb.org/3/movie/'+
      '13?api_key=937708f053ce13e14ca2d113ac449eed&language=en-US')
      .map((res) => res.json()).toPromise();
    }

    //get Movie cast Details of favourite movie.
    getMovieCredits(){
      return this.jsonp.get('https://api.themoviedb.org/3/movie/'+
      '13/credits?api_key=937708f053ce13e14ca2d113ac449eed&callback=JSONP_CALLBACK')
      .map(
            (res) =>{
              let data = res.json();
              return data;
            }
        );
    }


}
