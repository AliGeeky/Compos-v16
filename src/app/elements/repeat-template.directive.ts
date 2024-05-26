import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeatTemplate]'
})
export class RepeatTemplateDirective {

  @Input('appRepeatTemplate') set render(times: number) {
    for (let i = 0; i < times; i++) {
      this.vcr.createEmbeddedView(this.templateRef, {});
    }
  }
  constructor(private vcr: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
