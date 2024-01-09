import { Component } from '@angular/core';
import {filter, from, interval, Observable, of, tap} from "rxjs";
import {map, mergeMap, switchMap, take} from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {

  private sourceObservable: Observable<number> = of(1, 2, 3);

  constructor() {
    // this.mapExample();

    // this.filterExample();
    //
    // this.tapExample();
    //
    // this.fromExample();
    //
    // this.intervalExample();

    // this.switchMapExample();

    this.mergeMapExample();
  }

  private printObservable(observable: Observable<any>): void {
    observable.subscribe(value => console.log(value));
  }

  private mapExample(): void {
    const mappedObservable = this.sourceObservable.pipe(map(value => value * 2));
    this.printObservable(mappedObservable);
  }

  private filterExample(): void {
    const filteredObservable = this.sourceObservable.pipe(filter(value => value % 2 === 0));
    this.printObservable(filteredObservable);
  }

  private tapExample(): void {
    const tappedObservable = this.sourceObservable.pipe(
      tap(value => console.log(`Value before tap: ${value}`)),
      map(value => value * 2),
      tap(value => console.log(`Value after tap: ${value}`))
    );
    this.printObservable(tappedObservable);
  }

  private fromExample(): void {
    const arrayObservable = from([11, 12, 13, 14, 15]);
    this.printObservable(arrayObservable);
  }

  private intervalExample(): void {
    const intervalObservable = interval(1000).pipe(take(5));
    this.printObservable(intervalObservable);
  }

  private switchMapExample(): void {
    const switchedObservable = this.sourceObservable.pipe(
      switchMap(value => of(value * 2))
    );
    this.printObservable(switchedObservable);
  }

  private mergeMapExample(): void {
    const mergedObservable = this.sourceObservable.pipe(
      mergeMap(value => of(value * 2))
    );
    this.printObservable(mergedObservable);
  }

}
