import { Directive, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidInValid]',
})
export class ValidInValidDirective {
  constructor(private ngControl: NgControl) {}

  @HostBinding('class.is-valid') get isValid(): boolean {
    return this.ngControl.valid && this.ngControl.touched;
  }

  @HostBinding('class.is-invalid') get isNotValid(): boolean {
    return !this.ngControl.valid && this.ngControl.touched;
  }
}
