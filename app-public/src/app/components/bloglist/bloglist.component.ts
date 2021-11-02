import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['../../../assets/css/blogstyle.css']
})
export class BloglistComponent implements OnInit {

  public blogs:Blog[]=[];
  constructor(
    private blogService:BlogService,
  ) { }

  private getBlogs(): void {
    this.blogService.getBlogs().then(response =>{this.blogs = response});

  }
  ngOnInit(): void {
    this.getBlogs();
  }

}
