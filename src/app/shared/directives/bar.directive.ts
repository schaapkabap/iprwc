import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appBar]'
})
export class BarDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

