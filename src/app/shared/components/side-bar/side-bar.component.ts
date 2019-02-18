import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output() currentClickSave = new EventEmitter();
  @Output() currentClickPdf = new EventEmitter();


  menu = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  clickedSave() {
    this.currentClickSave.emit();
  }
  clickedPdf() {
    this.currentClickPdf.emit();
  }


}
