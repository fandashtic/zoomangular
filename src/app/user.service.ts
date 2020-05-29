import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: User) {
    return this.firestore.collection('users').add(user);
  }

  setUser(data, id){
     return {
          id: id ?? id,
          email: data.email ?? data.email,
          name: data.name ?? data.name,
          userType: data.userType ?? data.userType,
          userName: data.userName ?? data.userName,
          password: data.password ?? data.password,
          meetingId: data.meetingId ?? data.meetingId,
          meetingPassword: data.meetingPassword ?? data.meetingPassword,
          meetingType: data.meetingType ?? data.meetingType,
        } as User;
  }
 
  getUser(userId: string) {
    this.firestore.doc('users/' + userId).get();
  }


  updateUser(user: User) {
    delete user.id;
    this.firestore.doc('users/' + user.id).update(user);
  }

  deleteUser(userId: string) {
    this.firestore.doc('users/' + userId).delete();
  }

}
