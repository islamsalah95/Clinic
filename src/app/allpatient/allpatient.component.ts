import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-allpatient',
  templateUrl: './allpatient.component.html',
  styleUrls: ['./allpatient.component.css']
})
export class AllpatientComponent implements OnInit {

  all:any[]=[]

id:any
result :any
  constructor(private _user:DataService, private _route:Router,public _activated:ActivatedRoute) { }
  ngOnInit(): void {
    this._user.getAllUsers().subscribe(all=>{
    this.all=all.data

this.id=this._activated.snapshot.params['id']
 this.result = this.all.filter(el=>el.id == this.id)

})
}

}



// id:any
// result :any


//   constructor(public _activated:ActivatedRoute) { }

//   ngOnInit(): void {

//  this.id=this._activated.snapshot.params['id']

//  this.result = this.data.filter(el=>el.id == this.id)


// }
