/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://edin-ayala-ing-b7a2a-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient) {}

  getCollection(ref: string) {
    return this.httpClient.get(`${this.baseUrl}/${ref}.json`);
  }

  addItem(ref: string, item: any) {
    return this.httpClient.post(`${this.baseUrl}/${ref}.json`, item);
  }

  updateItem(ref: string, id: string, item: any) {
    return this.httpClient.put(`${this.baseUrl}/${ref}/${id}.json`, item);
  }

  deleteItem(ref: string, id: string) {
    return this.httpClient.delete(`${this.baseUrl}/${ref}/${id}.json`);
  }
}*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { LoginService } from './login/login.service';

@Injectable({ 
  providedIn: 'root' 
}) export class DataService { 
  private baseUrl = 'https://edin-ayala-ing-b7a2a-default-rtdb.firebaseio.com/'; 

  constructor(private httpClient: HttpClient, private loginService: LoginService) {} 
  
  getCollection(ref: string) { const token = this.loginService.getIdToken();
     return this.httpClient.get(`${this.baseUrl}/${ref}.json?auth=${token}`); 
    }
    addItem(ref: string, item: any) { const token = this.loginService.getIdToken();
       return this.httpClient.post(`${this.baseUrl}/${ref}.json?auth=${token}`, item);
       } 
       updateItem(ref: string, id: string, item: any) { const token = this.loginService.getIdToken();
         return this.httpClient.put(`${this.baseUrl}/${ref}/${id}.json?auth=${token}`, item); 
        } 
        deleteItem(ref: string, id: string) { const token = this.loginService.getIdToken();
           return this.httpClient.delete(`${this.baseUrl}/${ref}/${id}.json?auth=${token}`); 
          }
        }



