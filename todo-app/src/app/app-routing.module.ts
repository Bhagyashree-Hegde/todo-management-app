import {RouterModule, Routes} from '@angular/router';
import {CreateTodoComponent} from './components/todos/create-todo/create-todo.component';
import {EditTodoComponent} from './components/todos/edit-todo/edit-todo.component';
import {TodoListComponent} from './components/todos/todo-list/todo-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {
    path: 'todo',
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: TodoListComponent},
      {path: 'create', component: CreateTodoComponent},
      {path: ':id', component: EditTodoComponent}
    ]
  }
];

export const todoRoutingModule = RouterModule.forRoot(routes);
