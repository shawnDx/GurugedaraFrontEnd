import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import {NotificationsService} from '../services/notifications.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;

constructor(
private authService:AuthService,
private router : Router,
private notificatioService:NotificationsService
//private toastr: ToastrService
) { }

ngOnInit() {
}
onLoginSubmit(){

const user = {
  username:this.username,
  password:this.password,
}
this.authService.authendicateUser(user).subscribe(data =>{
  if(data.success){
    this.authService.storeUserData(data.token , data.user);
    this.authService.addUserData(data.userId,data.role);
    //console.log(data.token);
    //this.toastr.info('you are now login');
    console.log("you are now login");
    this.notificatioService.alertInfo("you are now login")
    this.router.navigate(['/dashboard'])
  }
  else{
    //this.toastr.error(data.msg);
    console.log(data.msg);
    this.notificatioService.alertDanger(data.msg)
    this.router.navigate(['/login'])
  }
  
});
}
}
