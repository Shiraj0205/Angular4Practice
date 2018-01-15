
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  apiUrl = "https://jsonplaceholder.typicode.com/posts";

  getPosts(){ 
    return this.http.get(this.apiUrl)
      .map((response) => response.json())
      .catch(this.handleError);
  }

  addPost(post) {
    return this.http.post(this.apiUrl, JSON.stringify(post))
      .map((response) => response.json())
      .catch(this.handleError)
  }

  updatePost(post){
    return this.http.patch(this.apiUrl + "/" + post.id, JSON.stringify({ isRead : true }))
      .map((response) => response.json())
      .catch(this.handleError);
  }

  deletePost(id){
    return this.http.delete(this.apiUrl + "/" + id, JSON.stringify({ isRead : true }))
      .map((response) => response.json())
      .catch(this.handleError)
  }

  private handleError(error : Response) {
    if(error.status === 404)
          return Observable.throw(new NotFoundError());
    else if(error.status === 400)
        return Observable.throw(new BadRequestError(error.json()))

        return Observable.throw(new AppError(error));
  }

}
