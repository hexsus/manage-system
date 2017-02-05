import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class GetDashboardsService {
  private dashboardsUrl = 'api/dashboard';
  private token = localStorage.getItem('token');

  constructor(private http: Http) {
  }

  getDashboards(): Observable<any> {
    let headers = new Headers({'x-auth': this.token});
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.dashboardsUrl, options)
  }

  addBoard(name) {
    let headers = new Headers({'x-auth': this.token});
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify({name});
    return this.http.post(this.dashboardsUrl, body, options)
      .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}
