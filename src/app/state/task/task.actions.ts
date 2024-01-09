import {createAction, props} from "@ngrx/store";
import {Task} from "@app/core/models/interfaces/task.model";

// from the component to the effect
export const loadTasks = createAction('[Task] Load Tasks');
// from the effect to the reducer
export const getTasksSuccess = createAction('[Task] Get Tasks Success', props<{ tasks: Array<Task> }>());
// from the effect to the reducer
export const getTasksFailure = createAction('[Task] Get Tasks Failure', props<{ error: any }>());


export const deleteTask = createAction('[Task] Delete Task', props<{ id: number }>());
export const deleteTaskSuccess = createAction('[Task] Delete Task Success', props<{ id: number }>());
export const deleteTaskFailure = createAction('[Task] Delete Task Failure', props<{ error: any }>());


export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const addTaskSuccess = createAction('[Task] Add Task Success', props<{ task: Task }>());
export const addTaskFailure = createAction('[Task] Add Task Failure', props<{ error: any }>());
