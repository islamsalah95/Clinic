import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public otp = ""
public isLoggedIn : boolean = false
public userData:any = null
  constructor(private _http:HttpClient) { }

  register(data:User):Observable<any>{
    return this._http.post(`http://localhost:3000/api/user/register`,data)
    }

    login(data:any):Observable<any>{
      return this._http.post(`http://localhost:3000/api/user/login`,data)
      }


      appointment(data:any):Observable<any>{
        return this._http.post(`http://localhost:3000/api/reservation/appointment`,data)
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

getSinglePatient():Observable<any>{
  return this._http.get(`http://localhost:3000/api/reservation/getSinglePatient`)
 }


 addNationalIdAdmin(data:any):Observable<any>{
  return this._http.post(`http://localhost:3000/api/stuffNationalId/addNationalId`,data)
  }

  getMyAppointmentDR():Observable<any>{
    return this._http.get(`http://localhost:3000/api/reservation/getMyAppointmentDR`)
   }

   GetAllOrdersForAdmin():Observable<any>{
    return this._http.get(`http://localhost:3000/api/user/getAllUsers`)
   }

   logout():Observable<any>{
    return this._http.get(`http://localhost:3000/api/user/logout`)
    }


  getSinglePatientHistory(id:string):Observable<any>{
   return this._http.get(`http://localhost:3000/api/patientHistory/getSinglePatientHistory/${id}`)
 }

    addPatientHistoryNurse(data:any):Observable<any>{
      return this._http.post(`http://localhost:3000/api/patientHistory/addPatientHistory`,data)
      }
    getAllUsers():Observable<any>{
      return this._http.get(`http://localhost:3000/api/user/getAllUsers`)
      }
      getAllClinics():Observable<any>{
        return this._http.get(`http://localhost:3000/api/clinic/getAllClinics`)
        }

        me():Observable<any>{
          return this._http.get(`http://localhost:3000/api/user/me`)
          }


}
