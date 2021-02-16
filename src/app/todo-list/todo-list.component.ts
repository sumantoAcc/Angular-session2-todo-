import { Component, OnInit } from '@angular/core';
import { Todo} from '../model/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  selectedTodoItem: Todo | undefined;
  todoItems: Todo[]=[
    {
      title: 'WorkOut',
      desc: 'Wakeup and do workout'
    },
    {
      title: 'Assignments',
      desc: 'Complete Assignments'
    },
    {
      title: 'Shopping',
      desc: 'Buy Fruits'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.selectedTodoItem= this.todoItems[0];
  }
  updateSelected(todo:Todo){
    this.selectedTodoItem =todo;
  }
}
