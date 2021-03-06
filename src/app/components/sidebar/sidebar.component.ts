import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/registerUser', title: 'New Person',  icon: 'person_add', class: '' },
    { path: '/classCoordination', title: 'class Coordination',  icon:'class', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },

    { path: '/viewpayment', title: 'Payment Details',  icon:'content_paste', class: '' },
    { path: '/marks', title: 'Marks',  icon:'library_books', class: '' },
    { path: '/attendance', title: 'Attendance',  icon:'supervisor_account', class: '' },

    { path: '/notifications', title: 'Notifications & messages',  icon:'notifications', class: '' },
    { path: '/addNotification', title: 'Add New Notification',  icon:'add_alert', class: '' },
    { path: '/viewStudentDetails', title: 'View Student Details',  icon:'people', class: '' },
    { path: '/EnterPayments', title: 'Add Payments',  icon:'payment', class: '' },
    { path: '/EnrollStudent', title: 'Enroll Students',  icon:'how_to_reg', class: '' },

    { path: '/SendMessage', title: 'send Message' , icon:'message', class:''},
    { path: '/ChangePassword',title:'change Password', icon:'security',class:''},
    { path: '/evaluation', title: 'Evaluation Marks' , icon:'assignment', class:''},
    { path: '/timetable', title: 'Timetable' , icon:'calendar_view_day', class:''},
    { path: '/card', title: 'Card' , icon:'calendar_view_day', class:''},
    
];

export const studentRoutes: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },

    { path: '/viewpayment', title: 'Payment Details',  icon:'content_paste', class: '' },
    { path: '/attendance', title: 'Attendance',  icon:'supervisor_account', class: '' },

    { path: '/notifications', title: 'Notifications & messages',  icon:'notifications', class: '' },

    { path: '/SendMessage', title: 'send Message' , icon:'message', class:''},
    { path: '/evaluation', title: 'Evaluation Marks' , icon:'assignment', class:''},
    { path: '/timetable', title: 'Timetable' , icon:'calendar_view_day', class:''},
];

export const teacher: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },

  { path: '/viewpayment', title: 'Payment Details',  icon:'content_paste', class: '' },
  { path: '/marks', title: 'Marks',  icon:'library_books', class: '' },

  { path: '/notifications', title: 'Notifications & messages',  icon:'notifications', class: '' },
  { path: '/addNotification', title: 'Add New Notification',  icon:'add_alert', class: '' },
  { path: '/viewStudentDetails', title: 'View Student Details',  icon:'people', class: '' },


  { path: '/SendMessage', title: 'send Message' , icon:'message', class:''},
  { path: '/evaluation', title: 'Evaluation Marks' , icon:'assignment', class:''},
  { path: '/timetable', title: 'Timetable' , icon:'calendar_view_day', class:''},
  
];

export const officeuser: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/registerUser', title: 'New Person',  icon: 'person_add', class: '' },
  { path: '/classCoordination', title: 'class Coordination',  icon:'class', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },

  { path: '/viewpayment', title: 'Payment Details',  icon:'content_paste', class: '' },
  { path: '/marks', title: 'Marks',  icon:'library_books', class: '' },
  { path: '/attendance', title: 'Attendance',  icon:'supervisor_account', class: '' },

  { path: '/notifications', title: 'Notifications & messages',  icon:'notifications', class: '' },
  { path: '/addNotification', title: 'Add New Notification',  icon:'add_alert', class: '' },
  { path: '/viewStudentDetails', title: 'View Student Details',  icon:'people', class: '' },
  { path: '/EnterPayments', title: 'Add Payments',  icon:'payment', class: '' },
  { path: '/EnrollStudent', title: 'Enroll Students',  icon:'how_to_reg', class: '' },

  { path: '/SendMessage', title: 'send Message' , icon:'message', class:''},
  { path: '/evaluation', title: 'Evaluation Marks' , icon:'assignment', class:''},
  { path: '/card', title: 'Card' , icon:'calendar_view_day', class:''},
  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  role:any
  constructor() { }
  
  ngOnInit() {
    this.role = localStorage.getItem("role");
    console.log(this.role);
    
    if (this.role == "admin"){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    if(this.role == "student"){
      this.menuItems = studentRoutes.filter(menuItem => menuItem);
    }
    if(this.role == "teacher"){
      this.menuItems = teacher.filter(menuItem => menuItem);
    }
    if(this.role == "officeuser"){
      this.menuItems = officeuser.filter(menuItem => menuItem);
    }
    if(this.role == "guardian"){
      this.menuItems = studentRoutes.filter(menuItem => menuItem);
    }
  }
}
