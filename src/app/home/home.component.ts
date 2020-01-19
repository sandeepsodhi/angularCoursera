import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../service/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../service/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  },
  animations:[
    flyInOut(),
    expand()

  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('baseURL') private baseURL
    ) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe(dish=> this.dish = dish, disherrmess=> this.dishErrMess = <any>disherrmess);
    this.promotionService.getFeaturedPromotion().subscribe(promotion=> this.promotion = promotion);
    this.leaderService.getFeaturedLeader().subscribe(leader=> this.leader = leader);

  }

}
