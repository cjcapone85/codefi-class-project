import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { delay, map, Observable } from 'rxjs';
import { Movie } from '../searchResults.model';
import { json } from 'express';
// import { SearchResults } from '../searchResults.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  Img_URL = 'https://image.tmdb.org/t/p/w500';
  query = "";
  apiKey:string = "74c8fbfdf29b471999f8a5ee6ec15a43";
  topMoviesUrl="https://api.themoviedb.org/3/trending/all/week?api_key=74c8fbfdf29b471999f8a5ee6ec15a43"
  // searchUrl="https://api.themoviedb.org/3/search/multi?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&query=${'name'}page=1&include_adult=false"
  searchUrl=`https://api.themoviedb.org/3/search/multi?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&query=${'name'}&page=1&include_adult=false`
  genreUrl="https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US"
  results: any;
  // results:object = this.http.get(this.searchUrl)


  constructor(private http: HttpClient, private searchResults: SearchService) {


  }

  ngOnInit(): void {

    this.searchResults.results().subscribe((data) => {

    })

  }

  onFetchMovies(searchInput: string) {
    this.http
     .get(this.searchUrl)
       .subscribe(data => {
          let results = Object.keys(data).map(a => data[a])
          this.results=results[1];
       });
   }

   search() {
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${'name'}&page=1&include_adult=false`)

  }

  // onSubmit() {
  //   return this.http.get(this.searchUrl).subscribe
  //   // console.log(this.onSubmit,'submit');
  // }

}

// https://api.themoviedb.org/3/movie/550?api_key=74c8fbfdf29b471999f8a5ee6ec15a43

// onFetchMovies(searchInput: string) {
//   this.http
//   .get('https://api.themoviedb.org/3/genre/movie/list?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US')
//     .subscribe(posts => {
//       console.log(posts);
//     });
// }

// https://api.themoviedb.org/3/discover/movie?api_key=74c8fbfdf29b471999f8a5ee6ec15a43&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en
