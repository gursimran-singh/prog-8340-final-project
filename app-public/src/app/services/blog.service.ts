import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogsUrl = 'http://localhost:3000/api/blogs';
  constructor(private http: HttpClient) {}

  getBlogs(): Promise<Blog[]> {
    return this.http
      .get(this.blogsUrl)
      .toPromise()
      .then((response) => {
        return response as Blog[];
      });
  }

  getSingleBlog(blogid: string): Promise<Blog> {
    return this.http
      .get(this.blogsUrl + '/' + blogid)
      .toPromise()
      .then((response) => response as Blog);
  }

  createBlog(newBlog: Blog): Promise<void | Blog> {
    return this.http
      .post(this.blogsUrl, newBlog)
      .toPromise()
      .then((response) => response as Blog);
  }

  updateBlog(id: string, newBlog: Blog): Promise<void | Blog> {
    return this.http
      .put(this.blogsUrl + '/' + id, newBlog)
      .toPromise()
      .then((response) => response as Blog);
  }

  deleteBlog(id: string): Promise<object> {
    return this.http.delete(this.blogsUrl + '/' + id).toPromise();
  }
}
