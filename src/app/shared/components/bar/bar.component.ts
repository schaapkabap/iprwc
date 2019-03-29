import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {BarDirective} from '../../directives/bar.directive';
import {AdComponent} from './adComponent';
import {SideBarComponent} from '../side-bar/side-bar.component';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass'],
})
export class BarComponent implements OnInit {
  @Input() bar: any;
  @ViewChild(BarDirective) barHost: BarDirective;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.bar);

    const viewContainerRef = this.barHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = this.bar.data;

  }
}
