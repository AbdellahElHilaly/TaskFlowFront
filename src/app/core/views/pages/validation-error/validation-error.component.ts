import { Component } from '@angular/core';
import {SimpleError} from "../../../models/interfaces/simple-error";
import {ActivatedRoute} from "@angular/router";
import {ValidationError} from "../../../models/interfaces/validation-error";

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrl: './validation-error.component.scss'
})
export class ValidationErrorComponent {
  validationError?: ValidationError;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.validationError = history.state.errorData;
    });
  }


  getFields(details: { [p: string]: Array<string> }) {
    return Object.keys(details);
  }
}
