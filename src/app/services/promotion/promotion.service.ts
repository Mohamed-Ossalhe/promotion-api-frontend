import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Promotion} from "../../interfaces/promotion";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private _http: HttpClient) { }

  /**
   * this function gets all the promotions from the api
   *
   * @returns list of promotions
   */
  public getAllPromotions(page: number = 0, size: number = 1): Observable<Promotion[]>{
    return this._http.get<Promotion[]>(`${environment.API_URL}/promotions/all?page=${page != 0 ? page - 1 : page}&size=${size}`) // get all promotions
  }
}
