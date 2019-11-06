import {Component, OnInit} from '@angular/core';
import {ToDoListService} from '../services/to-do-list.service';
import {Task} from '../entities/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private toDoListService: ToDoListService) {
  }

  ngOnInit() {
  }

}
