import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IpInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {
  private baseUrl = '/api';  // Usar el prefijo /api

  constructor(private http: HttpClient) { }

  getMyIP(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/myip`, { responseType: 'text' as 'json' });
  }

  getIpInfo(ip: string): Observable<IpInfo> {
    return this.http.get<IpInfo>(`${this.baseUrl}/ipinfo/${ip}`);
  }
}
