import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<boolean>();

  handleClose(): void {
    this.closed.emit(!this.isOpen); 
    this.isOpen = false; 
  }
  ngOnInit(): void {
    // console.log('Sidebar initialized with isOpen:', this.isOpen);
    // You can add any additional initialization logic here
  }
}
