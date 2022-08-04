import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _user:DataService, private _route:Router) { }

  ngOnInit(): void {
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







// import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/services/data.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-forget',
//   templateUrl: './forget.component.html',
//   styleUrls: ['./forget.component.css']
// })
// export class ForgetComponent implements OnInit {

//   constructor(private _user:DataService, private _route:Router) { }

//   ngOnInit(): void {
//   }

//   onForget(data:any){

//     if(data.valid){
//       this._user.forget(data.value).subscribe(
//         (res)=>{console.log(res)},
//         (err)=>{console.log(err.error.data)},
//         ()=>{
//           console.log("done")
//           this._route.navigateByUrl("updatePass")
//         }
//       )
//     }


//       }


// }
