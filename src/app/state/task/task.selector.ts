import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TaskStore} from "@app/state/task/task.store";

export const taskFeatureSelector = createFeatureSelector<TaskStore>('task');

export const taskSelector = createSelector(
  taskFeatureSelector,
  (state: TaskStore) => state.tasks
);

export const taskSelectorLastId = createSelector(
  taskFeatureSelector,
  (state: TaskStore) => state.tasks[state.tasks.length - 1].id
);

