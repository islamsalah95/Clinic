import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.css']
})
export class UpdatePassComponent implements OnInit {

  constructor(private _user:DataService, private _route:Router) { }

  ngOnInit(): void {
  }

  onUpdate(data:any){

    if(data.valid){
      this._user.update(data.value).subscribe(
        (res)=>{console.log(res)},
        (err)=>{console.log(err.error.data)},
        ()=>{
          console.log("done")
          this._route.navigateByUrl("/")
        }
      )
    }


      }


}
