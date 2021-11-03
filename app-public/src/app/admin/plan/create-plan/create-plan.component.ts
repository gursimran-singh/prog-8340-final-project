import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css'],
  providers:[PlanService]
})
export class CreatePlanComponent implements OnInit {
  form!: FormGroup;
  title = 'Create New Plan';
  id!: string;
  isAddMode!: boolean;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private planService: PlanService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['planid'];
    this.isAddMode = !this.id;
    if (!this.isAddMode) {
      this.title = 'Update Plan';
    }

    this.form = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      features: [null, Validators.required],
    });

    if (!this.isAddMode) {
      this.planService
        .getSinglePlan(this.id)
        .then((x) => this.form.patchValue(x));
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.planService
        .createPlan(this.form.value)
        .then(() => {
          this.router.navigate(['/admin/plans']);
        })
        .catch(this.handleError);
    } else {
      this.planService
        .updatePlan(this.id, this.form.value)
        .then(() => {
          this.router.navigate(['/admin/plans']);
        })
        .catch(this.handleError);
    }
  }

  private handleError(error: any) {
    console.log('error: ', error);
  }
}

