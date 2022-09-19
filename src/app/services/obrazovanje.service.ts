import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ORAZOVANJE_URL } from '../app.constants';
import { Obrazovanje } from '../models/obrazovanje';

@Injectable({
  providedIn: 'root'
})
export class ObrazovanjeService {

  constructor(private httpClient: HttpClient) { }

  public getAllObrazovanja(): Observable<any> {

    return this.httpClient.get(`${ORAZOVANJE_URL}`)
  }
  public insertObrazovanje(obrazovanje: Obrazovanje): Observable<any> {
    obrazovanje.id = 0;
    return this.httpClient.post(`${ORAZOVANJE_URL}`, obrazovanje);
  }

  public updateObrazovanje(obrazovanje: Obrazovanje): Observable<any> {
    return this.httpClient.put(`${ORAZOVANJE_URL}`, obrazovanje);
  }

  public deleteObrazovanje(id: number): Observable<any> {
    return this.httpClient.delete(`${ORAZOVANJE_URL}/${id}`);
  }
}
