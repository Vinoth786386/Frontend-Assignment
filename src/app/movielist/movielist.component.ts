import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  previousvisible: boolean = false
  nextvisible: boolean = false
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchMovies()
  }
  movies: any[] = [];
  previousurl = ''
  nexturl = ''
  fetchMovies(actions?: string) {
    this.previousvisible=false
    this.nextvisible=false
    let url = "https://demo.credy.in/api/v1/maya/movies/"
    if (actions == "next") {
      url = this.nexturl
    }
    else if (actions == 'previous') {
      url = this.previousurl
    }
    console.log(url)
    this.http.get(url).subscribe((response: any) => {
      if (response) {
        this.movies = response.results
        if (response.previous != null) {
          this.previousvisible = true
          this.previousurl = response.previous
        }
        if (response.next != null) {
          this.nextvisible = true
          this.nexturl = response.next
        }
        console.log(response)
      }
      else {
      }
    }
    )
  }
}


