
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {

  posts : any[];
  apiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {
      http.get(this.apiUrl)
        .subscribe(response => {
                                  this.posts = response.json();
                                })
    }

    addPost(input : HTMLInputElement) {
      let post = { title : input.value }
      this.http.post(this.apiUrl, JSON.stringify(post)).subscribe((response) => {
        post['id'] = response.json().id;
      })
      
      input.value = '';
      this.posts.splice(0, 0, post);
    }
}