import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Todo} from '../todo.model';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];
  filteredTodoList: Todo[] = [];
  searchText = '';

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getTodoList();
  }

  private getTodoList(): void {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.todoList = todos;
      this.filteredTodoList = JSON.parse(JSON.stringify(this.todoList));
    });
  }

  _onCreateTodoClick(): void {
    this.router.navigate(['/todo/create']);
  }

  _onCardClick(id: string): void {
    this.router.navigate(['/todo/', id]);
  }

  _deleteTodoEdit(id: string): void {
    this.todoService.deleteTodo(id).subscribe((deletedTodo: Todo) => {
      this.getTodoList();
    });
  }

  _onSearchTextChange(newValue: string): void {
    this.searchText = newValue;
    this.filteredTodoList = [];
    if (!this.searchText) {
      this.filteredTodoList = JSON.parse(JSON.stringify(this.todoList));
    } else {
      this.todoList.forEach((item: Todo) => {
        const searchableString = item.text + item.title;
        if (this.checkForSearchedText(searchableString, newValue)) {
          this.filteredTodoList.push(item);
        }
      });
    }
  }

  private checkForSearchedText(searchableString: string, searcher: string, flags?: string, forceSafe?: boolean): boolean {
    return (searchableString.search(new RegExp(searcher, flags)) >= 0);
  }

}
