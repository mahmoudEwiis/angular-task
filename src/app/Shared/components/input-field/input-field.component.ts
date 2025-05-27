import {
  Component,
  Input,
  ViewChild,
  ContentChild,
  ElementRef,
  forwardRef,
  TemplateRef
} from '@angular/core';
import {
  AbstractControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

import {
  InputType,
  InputSize,
  InputState,
  InputShape,
  InputIconPosition,
  InputIconType
} from './types/inputTypes.type'; 

@Component({
  selector: 'app-input-field',
  imports: [NgClass, NgIf, NgTemplateOutlet, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent {
  @Input() id = `input-${Math.random().toString(36).substring(2, 9)}`;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() hint = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() showValidFeedback = true;
  @Input() noMargin = false;
  @Input() control?: AbstractControl;

  @Input() type: InputType = 'text';
  @Input() size: InputSize = 'md';
  @Input() state: InputState = 'default';
  @Input() shape: InputShape = 'rounded';
  @Input() icon?: InputIconType;
  @Input() iconPosition: InputIconPosition = 'left';

  @ViewChild('inputElement') inputElement?: ElementRef<HTMLInputElement>;
  @ContentChild('prepend') prependTemplate?: TemplateRef<any>;
  @ContentChild('append') appendTemplate?: TemplateRef<any>;

  value = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: any): void {
    this.value = value || '';
    if (this.inputElement && this.inputElement.nativeElement) {
      this.inputElement.nativeElement.value = this.value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  focus(): void {
    this.inputElement?.nativeElement.focus();
  }
}
