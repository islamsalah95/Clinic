import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  all:any[]=[]
  constructor(private _user:DataService, private _route:Router) { }
  addAppointmentForm=new FormGroup({
    name:new FormControl("",[
  Validators.required,
  Validators.minLength(5),
    ]),
    day:new FormControl("",[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2)
    ]),
    DoctorId:new FormControl("",[
      Validators.required
        ]),
  })

   ngOnInit(): void {
    this._user.GetAllDoctors().subscribe(all=>{
    this.all=all.data
    console.log(all)
  })
}

  get name(){return this.addAppointmentForm.get("name")}
  get day(){return this.addAppointmentForm.get("day")}
  get DoctorId(){return this.addAppointmentForm.get("DoctorId")}


  handleD(){
    if (this.addAppointmentForm.get("day")?.value=="sa"||this.addAppointmentForm.get("day")?.value=="su"||this.addAppointmentForm.get("day")?.value=="mo"||this.addAppointmentForm.get("day")?.value=="tu"||this.addAppointmentForm.get("day")?.value=="we") {
 return true
    }
    else{
     return false
    }
   }


   addAppointment(data:any){

            this._user.appointment(data.value).subscribe(
              (res)=>{console.log(res)},
              (err)=>{console.log(err)},
              ()=>{
                console.log("done")
              }
            )

            }



}



// export class GetAllDoctorsComponent implements OnInit {
//   all:any[]=[]

// constructor(private _data:DataService) { }

//   ngOnInit(): void {

//     this._data.GetAllDoctors().subscribe(all=>{
//     this.all=all.data
//     console.log(all)
//   })
// }


// }
