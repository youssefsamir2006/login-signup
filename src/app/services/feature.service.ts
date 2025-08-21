import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { feature } from '../models/feature.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = 'http://localhost:5000/api/features'; // The backend URL

  constructor(private http: HttpClient) { }

  getFeatures(): Observable<feature[]> {
    return this.http.get<feature[]>(this.apiUrl);
  }
}
