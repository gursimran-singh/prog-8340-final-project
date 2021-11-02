import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService],
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogService.getBlogs().then((blogs) => (this.blogs = blogs));
  }

  deleteBlog(id: string, name: string) {
    if (confirm('Are you sure to delete the blog "' + name + '"')) {
      this.blogService.deleteBlog(id).then(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/admin/blogs']);
      });
    } else {
      return;
    }
  }

  private handleError(error: any) {
    console.log('error: ', error);
  }
}
