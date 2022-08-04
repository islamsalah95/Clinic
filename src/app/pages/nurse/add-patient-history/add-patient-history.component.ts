import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-patient-history',
  templateUrl: './add-patient-history.component.html',
  styleUrls: ['./add-patient-history.component.css']
})
export class AddPatientHistoryComponent implements OnInit {

  constructor(private _data:DataService, private _route:Router) { }
  all:any[]=[]
  allPAtient:any[]=[]
  ngOnInit(): void {
    this._data.GetAllDoctors().subscribe(all=>{
      this.all=all.data
      console.log(all)
    })

    this._data.getAllUsers().subscribe(allPAtient=>{
      this.allPAtient=allPAtient.data
      console.log(allPAtient)
    })
  }
  addPatientHistory(data:any){
    this._data.addPatientHistoryNurse(data.value).subscribe(
      (res)=>{console.log(res)},
      (err)=>{console.log(err)},
      ()=>{
        console.log("done")
      }
    )

    }

}
