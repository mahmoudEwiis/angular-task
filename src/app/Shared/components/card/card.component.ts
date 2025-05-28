import { NgClass, NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { shadowType } from './types/card.type';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet ,  RouterLink , NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() image?: string;
  @Input() buttonText?: string;
  @Input() buttonLink?: string;

  @Input() width = '18rem';
  @Input() shadow: shadowType = 'sm';
  @Input() hover = false;
  @Input() bodyClasses = '';

  @ContentChild('header') headerTemplate?: TemplateRef<any>;

  get cardClasses(): { [key: string]: boolean } {
    return {
      'shadow-none': this.shadow === 'none',
      'shadow-sm': this.shadow === 'sm',
      'shadow': this.shadow === 'md',
      'shadow-lg': this.shadow === 'lg',
      'card-hover': this.hover
    };
  }
}
