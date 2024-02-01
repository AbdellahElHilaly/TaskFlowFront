//i am a data stream :)
import {interval, Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {mergeMap, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ColdObservableService {

  constructor() {
  }

  code() {
    const observable = new Observable((observer) => {
      observer.next('hello');
      observer.next('world');
      observer.complete();
    });

    observable.subscribe((value) => {
      console.log(value);
    });

    this.thePowerOfObservable();

  }

  thePowerOfObservable() {
    const observable$: Observable<number> = interval(1000).pipe(
      take(100)
    );


    observable$.subscribe(result => console.log(result));


  }
}

