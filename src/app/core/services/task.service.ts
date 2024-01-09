import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "@app/core/models/interfaces/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {

  }

  public getAllTasks():Observable<Array<Task>> {
    return this.http.get(this.URL) as Observable<Array<Task>>;
  }


  public deleteTask(id:number):Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
  }


  public addTask(task:Task):Observable<Task>{
    return this.http.post(this.URL,task) as Observable<Task>;
  }


}


