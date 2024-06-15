import { Component } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  constructor(private myService: MyService) {}

  closeComponent() {
    this.myService.viewContainerRef.clear();
  }
}
