import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.css'],
  providers: [MovieService]
})

export class MovieCreditsComponent implements OnInit {

    //Variable to store the data returned by API
    credits = [];

    constructor(private movieService: MovieService) {}

    //This method runs during initialization.Calls Movie Service getMovieCredits method.
    ngOnInit() {
        this.movieService.getMovieCredits().subscribe(
            (data) => this.credits = data,
            err => this.logError(err),
            () => console.log('Movie credits Fetched')
        );
    }

    //Prints error in console.
    logError(err) {
        console.error('Error Fetching data: ' + err);
    }

    linkProfile(castId){
        window.open("https://www.themoviedb.org/person/"+castId,"_blank");
    }

    profilePic(url) {
      var pic = (url)?"url(http://image.tmdb.org/t/p/w185" + url + ")":"url(/assets/icons/profile-pic.png)";
      return pic;
    }
}
