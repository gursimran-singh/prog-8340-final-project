import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
})
export class BlogCreateComponent implements OnInit {
  form!: FormGroup;
  title = 'Create New Blog';
  id!: string;
  isAddMode!: boolean;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['blogid'];
    this.isAddMode = !this.id;
    if (!this.isAddMode) {
      this.title = 'Update Blog';
    }

    this.form = this.fb.group({
      name: [null, Validators.required],
      image: [null, Validators.required],
      excerpt: [null, Validators.required],
      description: [null, Validators.required],
      publishedDate: [null],
    });

    if (!this.isAddMode) {
      this.blogService
        .getSingleBlog(this.id)
        .then((x) => this.form.patchValue(x));
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.blogService
        .createBlog(this.form.value)
        .then(() => {
          this.router.navigate(['/admin/blogs']);
        })
        .catch(this.handleError);
    } else {
      this.blogService
        .updateBlog(this.id, this.form.value)
        .then(() => {
          this.router.navigate(['/admin/blogs']);
        })
        .catch(this.handleError);
    }
  }

  private handleError(error: any) {
    console.log('error: ', error);
  }
}
