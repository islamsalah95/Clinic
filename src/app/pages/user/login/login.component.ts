import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new FormGroup({
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

msg=""
  emailUniqueError = ""
constructor(private _user:DataService, private _route:Router) { }
ngOnInit(): void {}

get name(){return this.login.get("name")}
get email(){return this.login.get("email")}
get password(){return this.login.get("password")}

onLogin(data:any){

  if(data.valid){
    this._user.login(data.value).subscribe(
      (res)=>{console.log(res)
localStorage.setItem("userToken",`Bearer ${res.data.token}`)
this._user.userData=res.data.user
      },
      (err)=>{this.msg="Invalid login data"},
      ()=>{
        this._user.isLoggedIn=true
        this._route.navigateByUrl("appointment")
      }
    )
  }

  }


  }
