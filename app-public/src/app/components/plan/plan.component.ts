import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan.service';
import { Plan } from '../../models/plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
  providers: [PlanService]
})
export class PlanComponent implements OnInit {
  plans: Plan[] = [];
  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.planService
      .getPlans()
      .then((plans: void | Plan[]) => {
        if (!plans) {
          return;
        }
        this.plans = plans;
      });
  }

}
