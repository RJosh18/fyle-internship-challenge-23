import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
})
export class RepositoryItemComponent {
  @Input() repository: any;
  @Output() repositoryClicked: EventEmitter<any> = new EventEmitter();
  item: any = {};
  constructor() {
    this.repository = {};
  }

  onRepositoryClick() {
    this.repositoryClicked.emit(this.repository);
  }
}
