import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SimpleError} from "../../../models/interfaces/simple-error";

@Component({
  selector: 'app-internal-sever-error',
  templateUrl: './internal-sever-error.component.html',
  styleUrl: './internal-sever-error.component.scss'
})
export class InternalSeverErrorComponent {

  errorData?: SimpleError;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.errorData = history.state.errorData;
    });
  }

}
