import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  Select()
  {
    return this.http.get("http://localhost:7879/emps");
  }

  SelectbyNo(No)
  {
    return this.http.get("http://localhost:7879/emps/" + No);
  }

  Delete(No)
  {
    return this.http.delete("http://localhost:7879/emps/" + No);
  }
 
  Update(empobj)
  {
    return this.http.put("http://localhost:9898/emps/" + empobj.No, empobj);
  }

  Insert(empobj)
  {
    return this.http.post("http://localhost:9898/emps", empobj);
  }

}
