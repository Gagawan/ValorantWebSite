import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBook]'
})
export class BookDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('lightgray', 'scale(1.05)', '1');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', 'scale(1.0)', '0.9');
  }

  private highlight(color: string, scale: string, opacity: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.transform = scale;
    this.el.nativeElement.style.opacity = opacity;
  }
}
