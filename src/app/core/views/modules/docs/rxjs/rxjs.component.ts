import {Component} from '@angular/core';
import {filter, from, interval, Observable, of, tap} from "rxjs";
import {map, mergeMap, switchMap, take} from "rxjs/operators";
import {ColdObservableService} from "@app/core/views/modules/docs/rxjs/services/observable.service";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {

  constructor(private coldObservableService: ColdObservableService) {
    this.coldObservableService.code();
  }

}
