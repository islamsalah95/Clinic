import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-get-my-appointment-dr',
  templateUrl: './get-my-appointment-dr.component.html',
  styleUrls: ['./get-my-appointment-dr.component.css']
})
export class GetMyAppointmentDRComponent implements OnInit {
  all:any[]=[]

  constructor(private _user:DataService, private _route:Router) { }

  ngOnInit(): void {
    this._user.getMyAppointmentDR().subscribe(all=>{
      this.all=all.data
      console.log(all)
    })

  }

}


