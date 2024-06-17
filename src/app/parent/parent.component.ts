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
    const ref = this.containerChildComponent.createComponent(ChildComponent);
    ref.instance.myVariable = 'I am data from Parent';

    this.myService.viewContainerRef = this.containerChildComponent;
  }
}
