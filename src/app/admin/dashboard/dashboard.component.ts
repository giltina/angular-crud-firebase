import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/policy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
  }

}
