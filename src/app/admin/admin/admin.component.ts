import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/policy.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
  }

}
