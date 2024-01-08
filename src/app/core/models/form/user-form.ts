import { FormControl, FormGroup, Validators, AbstractControl } from "@angular/forms";

export class UserForm {

  formGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(4),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(4),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(8),
    ]),
  }, { validators: this.passwordMatchValidator });

  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ 'passwordMismatch': true });
      return { 'passwordMismatch': true };
    } else {
      control.get('confirmPassword')?.setErrors(null);
      return null;
    }
  }



  get email() {
    return this.formGroup.get('email');
  }
  get password() {
    return this.formGroup.get('password');
  }

  get confirmPassword() {
    return this.formGroup.get('confirmPassword');
  }

  get firstName() {
    return this.formGroup.get('firstName');
  }

  get lastName() {
    return this.formGroup.get('lastName');
  }

  get passwordMessage() {
    if (this.password?.hasError('required')) return 'Password is required';
    else if (this.password?.hasError('minlength')) return 'Password must be at least 8 characters long';
    else if (this.password?.hasError('maxlength')) return 'Password cannot be more than 15 characters long';
    return '';
  }

  get confirmPasswordMessage() {
    if (this.confirmPassword?.hasError('required')) return 'Confirm Password is required';
    else if (this.confirmPassword?.hasError('minlength')) return 'Confirm Password must be at least 8 characters long';
    else if (this.confirmPassword?.hasError('maxlength')) return 'Confirm Password cannot be more than 15 characters long';
    else if (this.confirmPassword?.hasError('passwordMismatch')) return 'Passwords do not match';
    return '';
  }

  get firstNameMessage() {
    if (this.firstName?.hasError('required')) return 'First Name is required';
    else if (this.firstName?.hasError('minlength')) return 'First Name must be at least 4 characters long';
    else if (this.firstName?.hasError('maxlength')) return 'First Name cannot be more than 15 characters long';
    return '';
  }

  get lastNameMessage() {
    if (this.lastName?.hasError('required')) return 'Last Name is required';
    else if (this.lastName?.hasError('minlength')) return 'Last Name must be at least 4 characters long';
    else if (this.lastName?.hasError('maxlength')) return 'Last Name cannot be more than 15 characters long';
    return '';
  }

  get emailMessage() {
    if (this.email?.hasError('required')) return 'Email is required';
    else if (this.email?.hasError('email')) return 'Email is not valid';
    return '';
  }









}
