import {Component, OnInit} from '@angular/core';
import {BarService} from './shared/services/bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'iprwc';
  bar: any;

  constructor(private barService: BarService) {

  }
  ngOnInit(): void {
    this.bar = this.barService.getbar();
  }
}
