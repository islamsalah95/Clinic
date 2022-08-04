import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  all:any[]=[]

  constructor(private _user:DataService, private _route:Router) { }

  ngOnInit(): void {
    this._user.GetAllDoctors().subscribe(all=>{
    this.all=all.data
    console.log(all)
  })
}

}
