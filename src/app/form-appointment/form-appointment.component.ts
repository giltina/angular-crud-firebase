import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/policy.service';
import { Person } from '../person';

@Component({
  selector: 'app-form-appointment',
  templateUrl: './form-appointment.component.html',
  styleUrls: ['./form-appointment.component.css']
})
export class FormAppointmentComponent implements OnInit {
  people: Person[];
  person = new Person();

  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
    this.refreshPeople()
  }

  refreshPeople() {
    this.policyService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people = data;
      });

  }

  addPerson() {
    this.policyService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      });
  }

}
