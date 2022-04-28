import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCust]'
})
export class CustDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.color="Purple"
  }

}
