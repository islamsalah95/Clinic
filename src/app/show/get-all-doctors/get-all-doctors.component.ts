import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-get-all-doctors',
  templateUrl: './get-all-doctors.component.html',
  styleUrls: ['./get-all-doctors.component.css']
})
export class GetAllDoctorsComponent implements OnInit {
  all:any[]=[]

constructor(private _data:DataService) { }

  ngOnInit(): void {

    this._data.GetAllDoctors().subscribe(all=>{
    this.all=all.data
    console.log(all)
  })
}


}
