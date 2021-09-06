import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  fpw:any = {"name":"savita","number":1234567890}

  constructor() { }

  ngOnInit(): void {
  }
  saveForgetPassword(){
    console.log(this.fpw)
  } 
}
