import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, EventEmitter, HostListener, Input, Output, TemplateRef } from '@angular/core';
import { ButtonSize, ButtonType } from './types/buttons';
import { ButtonConfig } from './interface/button';


@Component({
  selector: 'app-button ',
  imports: [NgClass, NgIf, NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements ButtonConfig {

  @Input() btnType: ButtonType = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() block = false;
  @Input() rounded = false;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() submit = false;
  @Input() outline = false;

  @Output() btnClick = new EventEmitter<MouseEvent>();

  @ContentChild('icon') iconTemplate?: TemplateRef<any>;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.btnClick.emit(event);
    }
  }
  
  get buttonClasses(): { [key: string]: boolean } {
    const typeClass = this.outline ? `btn-outline-${this.btnType}` : `btn-${this.btnType}`;
    
    return {
      [typeClass]: true,
      [`btn-${this.size}`]: this.size !== 'md',
      'btn-block': this.block,
      'rounded-pill': this.rounded,
      'disabled': this.disabled || this.loading
    };
  }
}
