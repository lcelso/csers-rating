import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Segment } from '../../state-management/state/segment.state';
import { UserService } from '../../services/users.service';

@Component({
    selector: 'app-one-on-one-cmp',
    templateUrl: 'one-on-one.component.html'
})
export class OneOnOneComponent implements OnInit {
    private basePath = '/csers';
    users: any;
    edit = false;
    key = '';

    constructor(private usersService: UserService, private store: Store<Segment>) {
    }
    ngOnInit() {
        this.getUsersList();
    }

    getUsersList() {
        // tslint:disable-next-line:max-line-length
        this.usersService.getListData(this.basePath).snapshotChanges()
            .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))).subscribe(users => {
                this.users = users;
        });
    }
}
