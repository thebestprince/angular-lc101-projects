import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
<<<<<<< HEAD
   movies = ['The Manchurian Candidate', 'Oceans 8','The Fly','Tron'];
=======
   movies = ['The Manchurian Candidate', 'Oceans 8','Coming To America', 'Rush Hour', "Pan's Labryinth",];
>>>>>>> 914d2845a7228e9a148af14f8c5499b8a78bc697

   constructor() { }

   ngOnInit() {
   }

}
