import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input() title : string;
  isExpanded = true;

  onClick(){
    this.isExpanded = !this.isExpanded;
  }
}
