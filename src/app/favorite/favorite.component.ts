import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite;
  @Output() change = new EventEmitter();
  constructor() { }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue : this.isFavorite });
  }

  ngOnInit() {
  }

}
