import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['Take out the trash', 'Complete LaunchCode prep work', 'Buy groceries'];

   constructor() { }

   ngOnInit() {
   }

}