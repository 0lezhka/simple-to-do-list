import {Component, OnInit} from '@angular/core';
import {ToDoListService} from '../services/to-do-list.service';

@Component({
  selector: 'app-task-editing',
  templateUrl: './task-editing.component.html',
  styleUrls: ['./task-editing.component.css']
})
export class TaskEditingComponent implements OnInit {
  description: string;

  constructor(private toDoListService: ToDoListService) {
  }

  ngOnInit() {
  }

  addTask() {
    this.toDoListService.addTask({id: 0, description: this.description, isDone: false});
  }
}
