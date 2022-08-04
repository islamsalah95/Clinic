import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-orders',
  templateUrl: './get-all-orders.component.html',
  styleUrls: ['./get-all-orders.component.css']
})
export class GetAllOrdersComponent implements OnInit {
  all:any[]=[]
name:any
  constructor(private _user:DataService) { }

    ngOnInit(): void {

      this._user.GetAllOrdersForAdmin().subscribe(all=>{
        this.all=all.data
      console.log(all)
      console.log(this._user.userData)
    })
  }

}
