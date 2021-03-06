import { Injectable } from '@angular/core';
import * as serverConfiguration from '../../assets/serverConfiguration.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public getConfigurations(): any {
    return serverConfiguration['default'][environment.key].ip;
  }

  private formTheUrl(endpoint): string {
    return this.getConfigurations() + endpoint;
  }

  public getRequest(endpoint): Observable<any> {
    return this.httpClient.get(this.formTheUrl(endpoint));
  }

  public postRequest(endpoint, payload): Observable<any> {
    return this.httpClient.post(this.formTheUrl(endpoint), payload);
  }

  public delRequest(endpoint): Observable<any> {
    return this.httpClient.delete(this.formTheUrl(endpoint));
  }

  public postCustom(endpoint, payload): Observable<any> {
    return this.httpClient.post(endpoint, payload);
  }

}
