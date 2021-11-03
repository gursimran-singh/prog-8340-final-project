import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class PlanService {
  private planURl = 'http://localhost:3000/api/plans';

  constructor(private http: HttpClient) { }
  getPlans(): Promise<Plan[]> {
    return this.http.get(this.planURl)
      .toPromise()
      .then(response => {
        return response as Plan[]
      });
  }

  getSinglePlan(planid: string): Promise<Plan> {
    return this.http
      .get(this.planURl + '/' + planid)
      .toPromise()
      .then((response) => response as Plan);
  }

  createPlan(newPlan: Plan): Promise<void | Plan> {
    return this.http
      .post(this.planURl, newPlan)
      .toPromise()
      .then((response) => response as Plan);
  }

  updatePlan(id: string, newPlan: Plan): Promise<void | Plan> {
    return this.http
      .put(this.planURl + '/' + id, newPlan)
      .toPromise()
      .then((response) => response as Plan);
  }

  deletePlan(id: string): Promise<object> {
    return this.http.delete(this.planURl + '/' + id).toPromise();
  }

  private handleError(error: any) {
    console.log(error.error);
  }
}
