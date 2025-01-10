import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor() { }
  
  public readonly apiUrl = 'https://azurewebsites.net/v1';
}
