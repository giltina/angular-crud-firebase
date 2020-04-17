import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/policy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public policyService: PolicyService) { }

  ngOnInit(): void {
  }

}
