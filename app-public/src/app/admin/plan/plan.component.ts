import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
  providers: [PlanService]
})
export class PlanComponent implements OnInit {
  plans: Plan[] = [];
  constructor(private planService: PlanService, private router: Router) { }

  ngOnInit(): void {
    this.planService.getPlans().then((response) => {
      this.plans = response;
    })
  }

  deletePlan(id: string, name: string) {
    if (confirm('Are you sure to delete the plan "' + name + '"')) {
      this.planService.deletePlan(id).then(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/admin/plans']);
      });
    } else {
      return;
    }
  }

}
