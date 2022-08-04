import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _user:DataService,private _route:Router) { }

  ngOnInit(): void {
    this._user.me().subscribe(
      res=>{
        this._user.isLoggedIn=true
        this._user.userData = res.data
      },
      err=>{
        this._user.isLoggedIn=false
      }
    )
  }



  onLogout(){
    this._user.logout().subscribe(
      (res)=>{console.log(res)},
      (err)=>{console.log(err.error.data)},
      ()=>{
        console.log("done")
        this._route.navigateByUrl("")
      }
    )

}
}





