import {Component} from '@angular/core';
import {Promotion} from 'src/app/interfaces/promotion';
import {PromotionService} from 'src/app/services/promotion/promotion.service';
import { formType } from 'src/app/types/formType';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  promotions: Promotion[] = [];

  isCreateFormVisible: boolean = false;

  public form: formType = {
    method: 'GET',
    formInputs: [
      {
        type: 'number',
        name: 'promotion_percentage',
        id: 'promotion_percentage',
        label: 'percentage',
        value: 0
      },
      {
        type: 'date',
        name: 'promotion_expiration',
        id: 'promotion_expiration',
        label: 'expiration date',
        value: ''
      },
      {
        type: 'submit',
        name: 'submit',
        id: 'submit',
        label: 'add promotion',
        value: ''
      }
    ],
    options: {
      headers: {}
    }
  }

  constructor(private _promotionService: PromotionService, private router: Router) {
  }

  ngOnInit() {
    try {
      this._promotionService.getAllPromotions().subscribe((data: any) => {
        this.promotions = data.content;
      });
    } catch (error) {
      console.log(error);
    }
  }

  openCreatePopUp() {
    this.isCreateFormVisible = true;
  }

  closeCreatePopUp() {
    this.isCreateFormVisible = false;
  }

  // subitm form
  submitForm(data: any) {
    console.log(data)
    // TODO: link this function to the service
    this._promotionService.createPromotion(data).subscribe((data: any) => {
      this.closeCreatePopUp();
      this.router.navigate(['']).then(r => alert("Promotion created successfully!"));
    }
  );

  }

}
