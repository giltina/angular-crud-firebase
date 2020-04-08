import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { PolicyService } from 'src/app/policy.service';
import { Policy } from 'src/app/policy.model';

@Component({
  selector: 'app-policy-add',
  templateUrl: './policy-add.component.html',
  styleUrls: ['./policy-add.component.css']
})
export class PolicyAddComponent implements OnInit {

  policyForm: FormGroup;
  policy: Policy;
  constructor(private formBuilder: FormBuilder, private policyService: PolicyService) {
    this.createPolicyForm();
   }

createPolicyForm(){
    this.policyForm = this.formBuilder.group({
      policynumber: [''],
      creationdate: [''],
      effectivedate: [''],
      expiredate: [''],
      paymentoption: [''],
      policyamount: [''],
      extrainfo: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.policyService.createPolicy(this.policyForm.value);
    this.createPolicyForm();
}



}
