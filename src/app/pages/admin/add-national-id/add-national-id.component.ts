import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-national-id',
  templateUrl: './add-national-id.component.html',
  styleUrls: ['./add-national-id.component.css']
})
export class AddNationalIdComponent implements OnInit {
  all:any[]=[]

  addNationalIdForm=new FormGroup({
    NationalId:new FormControl("",[
  Validators.required,
  Validators.minLength(14),
  Validators.minLength(14),


    ]),
    type:new FormControl("",[
      Validators.required,


    ]),
    department:new FormControl("",[
      Validators.required
        ]),
        description:new FormControl("",[
          Validators.required
            ]),
            VezeetaPrice:new FormControl("",[
              Validators.required
                ])
  })

  constructor(private _user:DataService) { }

    ngOnInit(): void {
      this._user.getAllClinics().subscribe(all=>{
      this.all=all.data
      console.log(all)
    })
  }



  get NationalId(){return this.addNationalIdForm.get("NationalId")}
  get type(){return this.addNationalIdForm.get("type")}

  NationalIdNumber(){
if (Number.isNaN(this.addNationalIdForm.get("NationalId")?.value)) {
  //console.log("number already")
  return true

}

else {return false}


  }


  handleD(){
   if (this.addNationalIdForm.get("type")?.value=="nurse"||this.addNationalIdForm.get("type")?.value=="doctor") {
return true
   }
   else{
    return false
   }
  }

  addNationalId(data:any){

    if (this.addNationalIdForm.valid&&this.handleD()) {
      this._user.addNationalIdAdmin(data.value).subscribe(
              (res)=>{console.log(res)},
              (err)=>{console.log(err)},
              ()=>{
                console.log(this._user.userData)
              }
            )
    }
        }




      }







//   import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DataService } from 'src/app/services/data.service';
// import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-appointment',
//   templateUrl: './appointment.component.html',
//   styleUrls: ['./appointment.component.css']
// })
// export class AppointmentComponent implements OnInit {
//   all:any[]=[]
//   constructor(private _user:DataService, private _route:Router) { }
//   addAppointmentForm=new FormGroup({
//     name:new FormControl("",[
//   Validators.required,
//   Validators.minLength(5),
//     ]),
//     day:new FormControl("",[
//       Validators.required,
//       Validators.minLength(2),
//       Validators.maxLength(2)
//     ]),
//     DoctorId:new FormControl("",[
//       Validators.required
//         ]),
//   })

//    ngOnInit(): void {
//     this._user.GetAllDoctors().subscribe(all=>{
//     this.all=all.data
//     console.log(all)
//   })
// }

//   get name(){return this.addAppointmentForm.get("name")}
//   get day(){return this.addAppointmentForm.get("day")}
//   get DoctorId(){return this.addAppointmentForm.get("DoctorId")}


//   handleD(){
//     if (this.addAppointmentForm.get("day")?.value=="sa"||this.addAppointmentForm.get("day")?.value=="su"||this.addAppointmentForm.get("day")?.value=="mo"||this.addAppointmentForm.get("day")?.value=="tu"||this.addAppointmentForm.get("day")?.value=="we") {
//  return true
//     }
//     else{
//      return false
//     }
//    }


//    addAppointment(data:any){

//             this._user.appointment(data.value).subscribe(
//               (res)=>{console.log(res)},
//               (err)=>{console.log(err)},
//               ()=>{
//                 console.log("done")
//               }
//             )

//             }



// }
