import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('OpenClose',[
      state("Open",style({
        height:'35rem',
        opacity:1
      })),
      state("Close",style({
        height:'4rem',
      
      })),
      transition("Open=>Close",[animate('.7s')]),
      transition("Close=>Open",[animate('.5s')])
    ])
  ]
})
export class AppComponent {
  title = 'chatpopupelement';
  public isOpen =true
  
}
