import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  userObj:any = { firstName:undefined,
    lastName:undefined,
    age:undefined,
    gender:undefined,
    contactNo:undefined,
    knownDiseases:undefined };

  allUsersData:any;
  alertRaisedUsers:any;

  public submitDetails() {
    this.http.post('http://localhost:3000/start-tracking', this.userObj).subscribe(res => {
      for (let key in this.userObj) {
        this.userObj[key] = undefined;
      }
    });
  }

  public getSuspects() {
    this.http.get('http://localhost:3000/get-suspects'  ).subscribe((res:any) => {
      this.allUsersData = res.data;
      this.alertRaisedUsers = this.allUsersData.filter((e)=>{ return e.alert });
      console.log("this.alertRaisedUsers");
      console.log(this.alertRaisedUsers);
    });
 
 
  }

  constructor(private http:HttpClient) {

   }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.getSuspects();
  }

}
