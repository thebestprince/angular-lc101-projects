import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Astonoshing images';
  image1 = 'https://www.nicepng.com/png/detail/58-585881_free-png-target-bullseye-transparent-target-bullseye-transparent.png://www.nicepng.com/png/detail/58-585881_free-png-target-bullseye-transparent-target-bullseye-transparent.png7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/44789b3b-8660-4e48-9903-83c415c63c00/d2ccm09-ec1fd961-e1b9-4254-bfe5-adf1aca1220a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0Nzg5YjNiLTg2NjAtNGU0OC05OTAzLTgzYzQxNWM2M2MwMFwvZDJjY20wOS1lYzFmZDk2MS1lMWI5LTQyNTQtYmZlNS1hZGYxYWNhMTIyMGEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r41UEsXWyW0zRraBrmtaAHqCOQkHEcCWbjsXUExqo-8';
  image3 = 'https://i.ebayimg.com/images/g/Vw8AAOSwfdBam2ZN/s-l1600.jpg';

  constructor() { }

  ngOnInit() {
  }

}