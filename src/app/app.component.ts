import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    AOS.init();
  }
}
