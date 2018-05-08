import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



interface DataResponse {
  route:any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) {}


  ngOnInit() { 
    this.http.get<DataResponse>('https://api.railwayapi.com/v2/route/train/12566/apikey/xg6ymuliox/').subscribe(data => {
         console.log(data);
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