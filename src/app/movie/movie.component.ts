import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})

export class MovieComponent implements OnInit {

  //Variable to store the data returned by API
  theMovie = {};

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
        this.movieService.getFavouriteMovieDetails()
            .then(
            (data) => this.theMovie = data,
            (err) => console.log(err)
            );
    }
    onSelect(id) {
        this.router.navigate(['/cast', id]);
    }
}

