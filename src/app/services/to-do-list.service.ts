import {Injectable} from '@angular/core';
import {Task} from '../entities/Task';
import * as _ from 'lodash';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  toDoList: Task[] = [];
  taskFilter = '';
  lastId = 0;

  constructor() {
  }

  getRemaining(): number {
    return this.toDoList.filter(o => !o.isDone).length;
  }

  getFilteredList() {
    if (this.taskFilter.length === 0) {
      return this.toDoList;
    }
    return this.toDoList.filter(a => a.description.includes(this.taskFilter));
  }

  addTask(task: Task) {
    task.id = this.lastId++;
    this.toDoList = [...this.toDoList, task];
  }

  removeTask(task: Task) {
    this.toDoList = this.toDoList.filter(o => o.id !== task.id);
  }

  removeAll() {
    this.toDoList = this.toDoList.filter(o => !o.isDone);
  }
}
