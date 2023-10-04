import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight=''

  constructor(private el:ElementRef) { 
    
  }
  // in ehich elemt we are using 
  @HostListener('mouseenter') onMouseEnter()
  {
    this.highlight(this.appHighlight || "yellow")
  }
  @HostListener('mouseleave') onMouseLeave()
  {
    this.highlight('')
  }
  highlight(color:string)
  {
    this.el.nativeElement.style.backgroundColor=color
  }
  

}
