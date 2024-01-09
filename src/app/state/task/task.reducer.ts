import {createReducer, on} from "@ngrx/store";
import * as TaskActions from "@app/state/task/task.actions";
import {initialTasksState, TaskStore} from "@app/state/task/task.store";

export const taskReducer = createReducer(
  initialTasksState,



  on(TaskActions.getTasksSuccess, (state: TaskStore, {tasks}) => {
    return {
      ...state,
      tasks: tasks,
      error: null,
    };
  }),
  on(TaskActions.getTasksFailure, (state: TaskStore, {error}) => {
    return {
      ...state,
      tasks: [],
      error: error,
    };
  }),


  on(TaskActions.deleteTaskSuccess, (state: TaskStore, {id}) => {
    return {
      ...state,
      tasks: state.tasks.filter(task => task.id !== id),
      error: null,
    };
  }),
  on(TaskActions.deleteTaskFailure, (state: TaskStore, {error}) => {
    return {
      ...state,
      error: error,
    };
  }),




  on(TaskActions.addTaskSuccess, (state: TaskStore, {task}) => {
    return {
      ...state,
      tasks: [...state.tasks, task],
      error: null,
    };
  }),
  on(TaskActions.addTaskFailure, (state: TaskStore, {error}) => {
    return {
      ...state,
      error: error,
    };
  }),
);
