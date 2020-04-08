import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/policy.service';
import { Policy } from 'src/app/policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  policies: Policy[];
  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {

    this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        const id = e.payload.doc.id;
        // tslint:disable-next-line: no-shadowed-variable
        const data = e.payload.doc.data() as Policy;
        return { id, ...data };
      });
    });

  }


update(policy: Policy) {
  this.policyService.updatePolicy(policy);
}

delete(id: string) {
  this.policyService.deletePolicy(id);
}

}
