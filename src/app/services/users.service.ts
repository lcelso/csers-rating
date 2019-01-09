import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Users } from './users.model';
import { MethodsFirebaseService } from './methodsFirebase.service';

@Injectable()
export class UserService {

  constructor(private methodsFirebase: MethodsFirebaseService) {}

  searchUserData(path, type, value) {
    return this.methodsFirebase.queryItem(path, type, value);
  }

  getListData(path): AngularFireList<Users> {
    return this.methodsFirebase.getListData(path);
  }

  createUser(path, user: Users): void {
    this.methodsFirebase.create(path, user);
  }

  updateUser(path, key: string, value: any): void {
    this.methodsFirebase.update(path, key, value);
  }

  deleteUser(path, key: string): void {
    this.methodsFirebase.delete(path, key);
  }
}
