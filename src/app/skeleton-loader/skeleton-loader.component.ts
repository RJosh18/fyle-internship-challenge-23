import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  template: './skeleton-loader.component.html',
})
export class SkeletonLoaderComponent {
  @Input() isLoading: boolean = false;
}
