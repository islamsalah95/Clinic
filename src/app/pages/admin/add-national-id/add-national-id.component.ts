import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-national-id',
  templateUrl: './add-national-id.component.html',
  styleUrls: ['./add-national-id.component.css']
})
export class AddNationalIdComponent implements OnInit {
  addNationalIdForm=new FormGroup({
    NationalId:new FormControl("",[
  Validators.required,
  Validators.minLength(14),
  Validators.minLength(14),


    ]),
    type:new FormControl("",[
      Validators.required,


    ]),

  })
  constructor() { }

  ngOnInit(): void {
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

  addNationalId(){

    if (this.addNationalIdForm.valid&&this.handleD()) {
      console.log(this.addNationalIdForm.value)
    }

        }
  }

