import { Component, Input } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() myVariable: string = '';

  constructor(private myService: MyService) {}

  closeComponent() {
    this.myService.viewContainerRef.clear();
  }
}
