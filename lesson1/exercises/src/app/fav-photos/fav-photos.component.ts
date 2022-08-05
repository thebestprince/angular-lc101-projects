import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Delectable food';
  image1 = 'https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/a/e8/ae88c95a-09f1-11e9-91ea-8f69e7e7bb98/5c24f90b24c59.image.jpg?resize=666%2C500';
  image2 = '';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}