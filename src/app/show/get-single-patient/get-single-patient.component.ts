import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-get-single-patient',
  templateUrl: './get-single-patient.component.html',
  styleUrls: ['./get-single-patient.component.css']
})
export class GetSinglePatientComponent implements OnInit {

  all:any[]=[]

  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this._data.getSinglePatient().subscribe(all=>{
    this.all=all.data
    console.log(all)
  })
}

}
