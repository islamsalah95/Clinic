import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-get-single-patient-history',
  templateUrl: './get-single-patient-history.component.html',
  styleUrls: ['./get-single-patient-history.component.css']
})
export class GetSinglePatientHistoryComponent implements OnInit {
 single:any={}

constructor(private _data:DataService,private _activated:ActivatedRoute) { }
  ngOnInit(): void {
const id =this._activated.snapshot.params["id"]
   this._data.getSinglePatientHistory(id).subscribe(data=>{
    this.single=data
   })

}

}
