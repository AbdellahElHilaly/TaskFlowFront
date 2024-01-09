import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '@app/core/models/interfaces/task.model';
import { TaskStore } from '@app/state/task/task.store';
import {deleteTask, loadTasks} from '@app/state/task/task.actions';
import {taskSelector} from "@app/state/task/task.selector";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Array<Task>>;

  constructor(private store: Store<TaskStore>) {
    this.tasks$ = this.store.select(taskSelector);
  }

  ngOnInit() {
    this.store.dispatch(loadTasks());
  }

  createTask() {
    // Implement logic for creating a task
  }

  editTask(id: number) {
    // Implement logic for editing a task
  }

  deleteTask(id: number) {
    alert('this task will be deleted');
    this.store.dispatch(deleteTask({ id }));
  }

  viewTask(id: number) {
    
  }
}
