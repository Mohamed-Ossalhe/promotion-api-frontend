import {Injectable} from '@angular/core';
import {environment} from 'src/app/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Promotion} from "../../interfaces/promotion";
import {promotionStatus} from "../../enums/promotionStatus";

@Injectable({
    providedIn: 'root'
})
export class PromotionService {

    constructor(private _http: HttpClient) {
    }

    /**
     * this function gets all the promotions from the api
     *
     * @returns list of promotions
     */
    public getAllPromotions(): Observable<Promotion[]> {
        return this._http.get<Promotion[]>(environment.API_URL + '/promotions/all') // get all promotions
    }

    public createPromotion(data: any): Observable<Promotion> {
        const promotion: Promotion = {
            rate: data.promotion_percentage,
            expiry: data.promotion_expiration,
            promotionStatus: promotionStatus.pending,
            id: ''
        }
        return this._http.post<Promotion>(environment.API_URL + '/promotions/create', promotion) // add a promotion
    }

    public updatePromotion(data: any): Observable<Promotion> {
        const promotion: Promotion = {
            id: data.id,
            rate: data.promotion_percentage,
            expiry: data.promotion_expiration,
            promotionStatus: promotionStatus.pending
        }
        return this._http.post<Promotion>(environment.API_URL + '/promotions/' + promotion.id, promotion) // update a promotion
    }
}
