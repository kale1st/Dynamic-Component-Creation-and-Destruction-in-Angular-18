import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MyService } from './my.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  @ViewChild('containerChildComponent', { read: ViewContainerRef })
  containerChildComponent!: ViewContainerRef;

  constructor(private myService: MyService) {}

  loadChildComponent() {
    this.containerChildComponent.clear();
    this.containerChildComponent.createComponent(ChildComponent);
    this.myService.viewContainerRef = this.containerChildComponent;
  }
}
