import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Policy } from 'src/app/policy.model';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore, public afAuth: AngularFireAuth, private router: Router) { }

  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
}

createPolicy(policy: Policy){
  return this.firestore.collection('policies').add(policy);
}

updatePolicy(policy: Policy){
  delete policy.id;
  this.firestore.doc('policies/' + policy.id).update(policy);
}

deletePolicy(policyId: string){
  this.firestore.doc('policies/' + policyId).delete();
}

// Sign up with email/password
SignUp(email, password) {
  return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      window.alert('You have been successfully registered!');
      console.log(result.user);
    }).catch((error) => {
      window.alert(error.message);
    });
}

// Sign in with email/password
SignIn(email, password) {
  return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
       this.router.navigate(['/admin/dashboard']);
    }).catch((error) => {
      window.alert(error.message);
    });
}


  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/admin/login']);
    });
  }

}
