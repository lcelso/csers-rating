import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Segment } from '../../state-management/state/segment.state';
import { UserService } from '../../services/users.service';
import { Users } from '../../services/users.model';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-user-list-cmp',
    templateUrl: 'list.component.html'
})

export class UserListComponent implements OnInit {

    public tableData1: TableData;
    private basePath = '/csers';
    users: any;
    edit = false;

    key = '';

    constructor(
        private usersService: UserService,
        private store: Store<Segment>) {
    }

    ngOnInit(){
        this.getUsersList();
        this.tableData1 = {
            headerRow: [ ' ', 'Nome', 'Capitulo', 'Nivel'],
            dataRows: [],
        };
    }

    getUsersList() {
        this.usersService.getListData(this.basePath).snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        ).subscribe(users => {
          this.users = users;
        });
    }

    deleteUser(userKey) {
        this.usersService.deleteUser(this.basePath, userKey);
    }

    teste(key) {
        this.key = key;
    }
}
