import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';


interface DataResponse {
  route:any;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  data: any;


  constructor(private http: HttpClient) {}

  showTrainRoute(){
    
  }

  ngOnInit() { 
    this.http.get<DataResponse>('https://api.railwayapi.com/v2/route/train/12553/apikey/xg6ymuliox/').subscribe(data => {
         this.data = data;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }
      );
  }



}