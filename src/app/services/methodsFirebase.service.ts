import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class MethodsFirebaseService {

  constructor(private db: AngularFireDatabase) {}

  private listData(path) {
    console.log(path)
    let data: AngularFireList<any> = null;
    data = this.db.list(path);
    return data;
  }

  private handleError(error) {
    console.log(error);
  }

  queryItem(path, type, value) {
    let data;
    const ref = this.db.database.ref(path);

    ref.orderByChild(type).equalTo(value).on('child_added', function(snapshot) {
      data = snapshot.val();
    });
    return data;
  }

  getListData(path) {
    return this.listData(path);
  }

  create(path, data): void {
    const create = this.listData(path);
    create.push(data);
  }

  update(path, key: string, value: any): void {
    const data = this.listData(path);
    data.update(key, value).catch(error => this.handleError(error));
  }

  delete(path, key: string): void {
    const data = this.listData(path);
    data.remove(key).catch(error => this.handleError(error));
  }
}
