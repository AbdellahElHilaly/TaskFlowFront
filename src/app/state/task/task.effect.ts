import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {map, mergeMap, catchError, switchMap, take} from "rxjs/operators";
import {from, interval, Observable, of} from "rxjs";
import * as taskActions from "./task.actions";
import { TaskService } from "@app/core/services/task.service";


/**
 * mergeMap:
 * 1. Takes a list of operators.
 * 2. Applies them to the source observable.
 * 3. Merges the results into a single observable.
 * 4. Returns the merged observable.
 *
 * ------------------------------
 * switchMap:
 * 1. Takes a list of operators.
 * 2. Applies them to the source observable.
 * 3. Returns the observable from the latest operator application, discarding previous observables.
 */










@Injectable()
export class TaskEffect {

  constructor(private taskService: TaskService, private actions$: Actions) {}

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(taskActions.loadTasks),
    mergeMap(() => this.taskService.getAllTasks().pipe(
      map((tasks: any) => taskActions.getTasksSuccess({ tasks })),
      catchError(error => of(taskActions.getTasksFailure({ error })))
    ))
  ));

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(taskActions.deleteTask),
    switchMap(action => this.taskService.deleteTask(action.id).pipe(
      map(() => taskActions.deleteTaskSuccess({ id: action.id })),
      catchError(error => of(taskActions.deleteTaskFailure({ error })))
    ))
  ));

  addTask$ = createEffect(() => this.actions$.pipe(
    ofType(taskActions.addTask),
    switchMap(action => this.taskService.addTask(action.task).pipe(
      map((task: any) => taskActions.addTaskSuccess({ task })),
      catchError(error => of(taskActions.addTaskFailure({ error })))
    ))
  ));

}


