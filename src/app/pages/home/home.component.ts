import { Component } from '@angular/core';
import { Promotion } from 'src/app/interfaces/promotion';
import { PromotionService } from 'src/app/services/promotion/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  promotions: Promotion[] = [];

  constructor(private _promotionService: PromotionService) {}

  ngOnInit() {
    try {
      this._promotionService.getAllPromotions()
        .then((response) => {
          this.promotions = response;
        })
        .catch(e => {
          console.log(e);
        });
    }catch(e) {
      console.log("error = " + e);
    }
  }
}