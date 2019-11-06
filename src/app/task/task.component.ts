import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../entities/Task';
import {ToDoListService} from '../services/to-do-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private toDoListService: ToDoListService) {
  }

  ngOnInit() {
  }

}
