import { Component, OnInit } from '@angular/core';

const DISH = {
  id: '0',
  name: 'Uthappizza',
  image: '/assets/images/uthappizza.png',
  category: 'mains',
  featured: true,
  label:'Hot',
  price:'4.99',
  description:'A unique combination of Indian Uthappam abd Italian pizza, topped with Cerignola olives, ripe vince cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
  comments:[
      {
          rating: 5,
          comment: 'Imagine all the eatables, livin in conFision!',
          author: 'john lemon',
          date: '2012-10-16T17:57:28.556094Z'
      },
      {
          rating: 4,
          comment: 'Sends anyone to heaven, I wish i counld get it.',
          author: 'Pault McVites',
          date: '2014-09-05T17:57:28.556094Z'
      },
      {
          rating: 3,
          comment: 'Eat it, just eat it!',
          author: 'Michael Jaikishan',
          date: '2015-02-13T17:57:28.556094Z'
      },
      {
          rating: 4,
          comment: 'Ultimate, Reaching for the stars!',
          author: 'Ringo Starry',
          date: '2013-12-02T17:57:28.556094Z'
      },
      {
          rating: 2,
          comment: 'It you birthday, we are gonna party',
          author: 'john lemon',
          date: '2012-10-16T17:57:28.556094Z'
      },

  ]
};

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish = DISH;

  constructor() { }

  ngOnInit() {
  }

}
