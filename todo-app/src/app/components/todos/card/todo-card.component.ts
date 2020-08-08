import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../todo.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['todo-card.component.less']
})
export class TodoCardComponent {

  @Input()
  cardModel: Todo;

  @Output()
  cardClick = new EventEmitter<void>();

  @Output()
  deleteTodoEvent = new EventEmitter<string>();

  _onDeleteButtonClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.deleteTodoEvent.emit(this.cardModel.id);
  }
}

