import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {


  menu = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menu = !this.menu;
  }


}
