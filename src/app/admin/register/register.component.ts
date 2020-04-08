import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/policy.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
  }

}
