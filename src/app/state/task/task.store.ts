import {Task} from "@app/core/models/interfaces/task.model";

export interface TaskStore {
  tasks: Array<Task>;
}


export const initialTasksState: TaskStore = {
  tasks: [],
};
