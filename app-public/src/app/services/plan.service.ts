import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class PlanService {
  private planURl = 'http://localhost:3000/api/plans';

  constructor(private http: HttpClient) { }
  getPlans(): Promise<void | Plan[]> {
    return this.http.get(this.planURl)
      .toPromise()
      .then(response => response as Plan[])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error.error);
  }
}
