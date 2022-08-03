import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  register(data:User):Observable<any>{
    return this._http.post(`http://localhost:3000/api/user/register`,data)
    }

    login(data:any):Observable<any>{
      return this._http.post(`http://localhost:3000/api/user/login`,data)
      }

      logout():Observable<any>{
        return this._http.get(`http://localhost:3000/api/user/logout`)
        }

      appointment(data:any):Observable<any>{
        return this._http.get(`http://localhost:3000/api/reservation/appointment`,data)
        }


        forget(data:any):Observable<any>{
          return this._http.post(`http://localhost:3000/api/user/forget`,data)
          }

          update(data:any):Observable<any>{
            return this._http.put(`http://localhost:3000/api/user/updatePass`,data)
            }

            GetAllDoctors():Observable<any>{
 return this._http.get(`http://localhost:3000/api/user/getAllDoctors`)
}



//   getImages():Observable<any>{
// return this._http.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
// }

// getSingleImages(id:string):Observable<any>{
//   return this._http.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
//   }

//ng g c show/getAllClinics

}
