import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import {FormsModule} from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditingComponent } from './task-editing/task-editing.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    TaskComponent,
    TaskListComponent,
    TaskEditingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
