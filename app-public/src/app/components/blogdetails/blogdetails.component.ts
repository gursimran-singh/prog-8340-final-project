import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  public aBlog:Blog={
    _id:'',
    title:'',
    image:'',
    excerpt:'',
    description:'',
    author:'',
    publishedDate:'',
  };
  public editBlogForm:boolean = false;
  constructor(
    private blogService:BlogService,
    private route: ActivatedRoute,
    private route2:Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        let id: string | null = params.get('blogId');
        return this.blogService.getSingleBlog(id!);
      })
    ).subscribe((newBlog: Blog) => {
      this.aBlog = newBlog;
    });
  }






}
