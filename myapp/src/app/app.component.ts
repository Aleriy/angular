import { Component, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ItemComponent } from './header/item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';

  constructor(private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    setTimeout(_ => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
      const componetRef = this.viewContainerRef.createComponent(componentFactory);
    }, 3000);
  }
}
