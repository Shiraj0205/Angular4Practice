import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  @Input() likesCount: number;
  @Input() isLiked: boolean;

  constructor() { }

  onClick(){
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
  }
}
