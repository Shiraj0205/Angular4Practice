import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private http : Http) { }

  followers : any[];
  ngOnInit() {
    this.getFollowers();
  }

  getFollowers(){
    this.http.get("https://api.github.com/users/mosh-hamedani/followers")
      .subscribe((response) => { this.followers = response.json(); });
  }

}
