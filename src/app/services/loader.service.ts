import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
} from '@angular/core'

import {LoaderComponent} from '../common/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderComponentRef: ComponentRef<LoaderComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  show() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.loaderComponentRef = componentRef;
  }

  hide() {
    this.appRef.detachView(this.loaderComponentRef.hostView);
    this.loaderComponentRef.destroy();
  }
}
