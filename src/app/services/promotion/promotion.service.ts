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
    const data = await fetch(`${environment.API_URL}/promotions/all`, { 
      method: "GET"
      // headers: new Headers(
      //   { 
      //     "ngrok-skip-browser-warning": "69420",
      //     "Access-Control-Allow-Origin": "*",
      //     "Sec-Fetch-Mode": "no-cors"
      //   })
    });
    console.error(data);
    
    const jsonData = await data.json();
    return jsonData ?? [];
  }
}
