import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[repeat]'
})
export class RepeatDirective {
@Input('repeat') amount: number = 0;
  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    for (let i = 0; i < this.amount; i++) {
      // add element to the DOM
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
