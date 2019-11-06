import {Component, OnInit, Output} from '@angular/core';
import {ToDoListService} from '../services/to-do-list.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private toDoListService: ToDoListService) {
  }

  ngOnInit() {
  }

}
