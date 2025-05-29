import { Component, EventEmitter, forwardRef, HostBinding, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
@Component({
  selector: 'app-input-upload',
  imports: [NgClass, NgIf ],
  templateUrl: './input-upload.component.html',
  styleUrl: './input-upload.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputUploadComponent),
      multi: true
    }
  ]
})
export class InputUploadComponent implements ControlValueAccessor {
  @Input() id = `upload-${Math.random().toString(36).substring(2, 9)}`;
  @Input() label = '';
  @Input() hint = '';
  @Input() accept = 'image/*'; 
  @Input() required = false;
  @Input() multiple = false;
  @Input() maxSize = 5; // In MB
  @Input() noMargin = false;
  @Input() uploadText = 'Click to upload';
  
  @Output() fileSelected = new EventEmitter<File | File[]>();
  
  hasFile = false;
  fileName = '';
  isDragging = false;
  disabled = false;
  error = '';
  
  file: File | File[] | null = null;
  
  onChange = (_: any) => {};
  onTouched = () => {};
  
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }
  
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }
  
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    
    if (event.dataTransfer?.files.length) {
      this.handleFiles(event.dataTransfer.files);
    }
  }
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.handleFiles(input.files);
    }
  }
  
  handleFiles(files: FileList): void {
    this.error = '';
    
    if (this.multiple) {
      const fileArray = Array.from(files);
      
      // Check file sizes
      const invalidFiles = fileArray.filter(file => file.size > this.maxSize * 1024 * 1024);
      if (invalidFiles.length > 0) {
        this.error = `Some files exceed the maximum size of ${this.maxSize}MB`;
        return;
      }
      
      this.file = fileArray;
      this.fileName = fileArray.map(f => f.name).join(', ');
    } else {
      const file = files[0];
      
      // Check file size
      if (file.size > this.maxSize * 1024 * 1024) {
        this.error = `File exceeds the maximum size of ${this.maxSize}MB`;
        return;
      }
      
      this.file = file;
      this.fileName = file.name;
    }
    
    this.hasFile = true;
    this.onChange(this.file);
    this.fileSelected.emit(this.file);
  }
  
  removeFile(event: Event): void {
    event.stopPropagation();
    this.file = null;
    this.fileName = '';
    this.hasFile = false;
    this.onChange(null);
  }
  
  writeValue(value: any): void {
    // Handle file objects or reset
    if (value) {
      this.file = value;
      
      if (Array.isArray(value)) {
        this.fileName = value.map((f: File) => f.name).join(', ');
      } else if (value instanceof File) {
        this.fileName = value.name;
      }
      
      this.hasFile = true;
    } else {
      this.file = null;
      this.fileName = '';
      this.hasFile = false;
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
}