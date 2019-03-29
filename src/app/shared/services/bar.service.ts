import {Injectable} from '@angular/core';
import {SideBarComponent} from '../components/side-bar/side-bar.component';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  getbar() {
    return new SideBarComponent();
  }
}
