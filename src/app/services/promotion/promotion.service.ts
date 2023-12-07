import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Promotion } from 'src/app/interfaces/promotion';

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
  public async getAllPromotions(): Promise<Promotion[]> {
    const data = await fetch(`${environment.API_URL}/promotions`, {method: "GET"});
    const jsonData = await data.json();
    return jsonData ?? [];
  }
}
