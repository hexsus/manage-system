import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class UserInfoService {
  private signInUrl = 'api/users';  // URL to web API
  private loginUrl = 'api/users/login';  // URL to web API
  constructor(private http: Http) {
  }

  signInUser(email, password): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify({email, password});
    return this.http.post(this.signInUrl, body, options)
      .map(this.extractData)
  }

  loginUser(email, password): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify({email, password});
    return this.http.post(this.loginUrl, body, options);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}
