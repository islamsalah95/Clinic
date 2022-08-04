import { Component, OnInit } from '@angular/core';
import { User } from './../interfaces/user';
import { Image } from '../interfaces/images';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,NgForm } from '@angular/forms';
@Component({
  selector: 'app-register-stuf',
  templateUrl: './register-stuf.component.html',
  styleUrls: ['./register-stuf.component.css']
})
export class RegisterStufComponent implements OnInit {
  images=new FormGroup({
    name:new FormControl("",[
      Validators.required,
      Validators.minLength(5),
      Validators.minLength(10),

    ]),
    password:new FormControl("",[
      Validators.required,

    ]),
    email:new FormControl("",[
      Validators.required,
      Validators.minLength(5),
      Validators.minLength(10),
      Validators.email,

        ])
  })


userData:User={
  name:"", email:"", password:"",
}

constructor(private _user:DataService, private _route:Router) { }
  ngOnInit(): void {}
  onRegister(data:NgForm){


  if(data.valid){
  this._user.register(data.value).subscribe(
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

