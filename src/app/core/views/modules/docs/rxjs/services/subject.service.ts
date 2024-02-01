//i am Observable and Observer in the same time :)

import {Injectable} from "@angular/core";
import {of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() {
  }

  code() {
    const subject = new Subject();

    subject.subscribe({
      next: (value) => {
        console.log(value);
      }
    });

    subject.next('hello');
    subject.next('world');
    subject.complete();








  }
}
