import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface DataResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'app';
  myData : any;


  constructor(private http: HttpClient) {}

  showAllPost(){
        this.http.get<DataResponse>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
          this.myData = data;
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

  ngOnInit() { 
   
  }



}