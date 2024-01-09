import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import * as TaskActions from '@app/state/task/task.actions';
import {Store} from "@ngrx/store";
import {TaskStore} from "@app/state/task/task.store";
import {Router} from "@angular/router";
import {taskSelectorLastId} from "@app/state/task/task.selector";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  newId: number = 0;


  constructor(private store: Store<TaskStore>, private router: Router) { }
  taskForm:FormGroup  = new FormGroup({
    id: new FormControl(''),
    userId: new FormControl(''),
    title: new FormControl(''),
    completed: new FormControl(''),
  });

  addTask() {
    this.getLastId();
    this.store.dispatch(TaskActions.addTask({task: this.taskForm.value}));
    alert('Task added successfully')
    this.router.navigate(['/task/list']).then(r => console.log(r));
  }


  getLastId() {
    this.store.select(taskSelectorLastId).subscribe((lastId) => {
      this.newId = Number(lastId) + 1;
      this.taskForm.patchValue({
        id: this.newId + ''
      });
    });
  }
}
