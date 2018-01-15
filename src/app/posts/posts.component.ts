
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostsService } from '../services/posts.service';
import { error } from 'util';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {

  posts : any[];

  constructor(private postsService: PostsService) {
    this.getPosts();
  }

  /*getPosts(){
    this.postsService.getPosts().subscribe(
      response => { this.posts = response.json(); },
      error => { 
                  alert('Unexpected error while fetching the posts data'); 
                  console.log(error);
                } );
}*/

    getPosts(){
      this.postsService.getPosts()
        .subscribe(posts => this.posts = posts);
    }

    addPost(input : HTMLInputElement) {
      let post = { title : input.value }
      this.postsService.addPost(post).subscribe(
                (newPost) => post['id'] = newPost.id,
                (error : AppError) => {
                  if(error instanceof BadRequestError){
                    alert("Bad request.");
                  }
                  throw error;
                });

      input.value = '';
      this.posts.splice(0, 0, post);
    }

    updatePost(post){
      this.postsService.updatePost(post)
        .subscribe(updatedPost => console.log(updatedPost));}

    deletePost(post){
      // Remove post from list
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);

      this.postsService.deletePost(post.id)
        .subscribe(
            null, //Success function
            (error : AppError) => {
              // Add post back to list
              this.posts.splice(index, 0, post);

              if (error instanceof NotFoundError)
                alert('Post is already deleted');
              else
                throw error;
            } );
    }

}