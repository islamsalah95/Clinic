import { ActivatedRoute } from '@angular/router';
import { Image } from './../../interfaces/images';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-singleimage',
  templateUrl: './singleimage.component.html',
  styleUrls: ['./singleimage.component.css']
})
export class SingleimageComponent implements OnInit {
  image:Image={}
  constructor(private _data:DataService,private _activated:ActivatedRoute) { }

  ngOnInit(): void {
//  const id =this._activated.snapshot.params["id"]
//     this._data.getSingleImages(id).subscribe(data=>{
//       this.image=data
   
//   })
  }
}
