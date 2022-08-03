import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-clinic',
  templateUrl: './admin-add-clinic.component.html',
  styleUrls: ['./admin-add-clinic.component.css']
})
export class AdminAddClinicComponent implements OnInit {

  constructor() { }
  addClinicForm=new FormGroup({
  name:new FormControl("",[
  Validators.required,
  Validators.minLength(5),
  Validators.minLength(10),

    ])

  })
  ngOnInit(): void {
  }
  get name(){return this.addClinicForm.get("name")}


  addClinic(){
    console.log(this.addClinicForm.value)

  }
}
