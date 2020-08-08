import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {todoRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {TodoCardComponent} from './components/todos/card/todo-card.component';
import {HeaderComponent} from './components/common/header/header.component';
import {CreateTodoComponent} from './components/todos/create-todo/create-todo.component';
import {EditTodoComponent} from './components/todos/edit-todo/edit-todo.component';
import {TodoFormComponent} from './components/todos/todo-form/todo-form.component';
import {TodoListComponent} from './components/todos/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    CreateTodoComponent,
    EditTodoComponent,
    HeaderComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    todoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
