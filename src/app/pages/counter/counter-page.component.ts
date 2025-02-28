import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styles: `
    button{
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  // constructor(){
  //   setInterval(() => {
  //     this.counterSignal.update(v => v + 1);
  //     console.log('tick');
  //   }, 2000);
  // }

  increaseBy(value:number, event: boolean = true, reset: boolean = false) {
    if(event && !reset) {
      this.counter += value;
      this.counterSignal.update(currrent => currrent + value);
    }
    if(!event && !reset){
      this.counter -= value;
      this.counterSignal.update(currrent => currrent - value);
    }
    if(!event && reset) {
      this.counter = 0;
      this.counterSignal.set(0);
    };
  }
}
