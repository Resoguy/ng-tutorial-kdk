import { Component, OnInit } from '@angular/core';


class Todo {
  id: number = Math.random();
  completed: boolean = false;

  constructor(public text: string) {}
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    new Todo('Todo 1'),
    new Todo('Todo 2'),
    new Todo('Todo 3')
  ];
  todoText = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.todos.push(new Todo(this.todoText));
    this.todoText = '';
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

}
