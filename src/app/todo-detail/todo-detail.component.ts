import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo | any ;
  @Input() selectedTodo:Todo | any;
  constructor() { }

  ngOnInit(): void {
    this.todo=this.selectedTodo;
  }

}
