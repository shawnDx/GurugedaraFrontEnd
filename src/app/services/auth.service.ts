import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();
const hostAddress = "http://139.59.66.58:3000"//"http://localhost:3000" 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken :any;
  user:any;
  constructor(private http:Http) { }

  /**Class Fletch functions */

  addfeeRecords(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress +'/fee/addFee',data,{headers: headers})
    .pipe(map(res => res.json()));
  }

  changefeeRecords(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress +'/error-correct-fee/changeFee',data,{headers: headers})
    .pipe(map(res => res.json()));
  }

  takeFeeRecords(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.get(hostAddress +'/error-correct-fee/takeFee',{headers: headers})
    .pipe(map(res => res.json()));
  }  

  authendicateUser(user){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/users/authenticate',user,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  dltLocation(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/location/deleteLocation',data,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }



  //enrollstudent/////////
  enrollStudent(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/class/enrol',data,{headers: headers}) //http://localhost:3000/
    .pipe(map(res => res.json()));
  }

  ////UnENroll/////////////
  UnenrollStudent(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/class/unenrol',data,{headers: headers}) //http://localhost:3000/
    .pipe(map(res => res.json()));
  }





  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization' , this.authToken)
    headers.append('Cotent-type','application/json');
    return this.http.get(hostAddress +'/users/profile',{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }
  storeUserData(token , user){
    localStorage.setItem('id_token' , token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  addUserData(userId,role){
    localStorage.setItem('userId' , userId);
    localStorage.setItem('role' , role);
  }

  loggedIn(){
    this.loadToken();
    return helper.isTokenExpired(this.authToken);
    //return false;
  }
  logout(){
    this.authToken =null;
    this.user =null;
    localStorage.clear();
  }
  loadToken(){
    const token = localStorage.getItem('id_token')
    this.authToken = token;
  }


}