import { Injectable, ViewChild, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  constructor() {}
}
