import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,
  stagger,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('showAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)'}),
        animate('500ms ease-out', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        //style({ height: '20px' }),
        animate('500ms ease-out', style({ transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class AppComponent  {
  offers = [
    {
      name: 'oferta 1',
      showDetails: false,
      details: 'detalles de la oferta...'
    },
    {
      name: 'oferta 2',
      showDetails: false,
      details: 'detalles de la oferta...'
    },
    {
      name: 'oferta 3',
      showDetails: false,
      details: 'detalles de la oferta...'
    },
    {
      name: 'oferta 4',
      showDetails: false,
      details: 'detalles de la oferta...'
    }
  ];

  mostrarDetalle(offer: any): void {
    if (offer && !offer.showDetails) {
      this.offers.map(currentOffer => {
        currentOffer.showDetails = false;
      })
      offer.showDetails = true;
    } else {
      offer.showDetails = false;
    }
  }
}
