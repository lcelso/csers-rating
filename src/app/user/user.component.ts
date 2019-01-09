import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Segment } from '../state-management/state/segment.state';
import { UserService } from '../services/users.service';
import { Users } from '../services/users.model';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

@Component({
    selector: 'app-user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    private baseUserPath = '/csers';

    id: any;

    private sub: any;

    users: Users = new Users();

    user: any;

    submitted = false;

    isEdit = false;

    title = 'Cadastrar Usuário';

    subtitle = 'Usuário criado com sucesso!';

    numberPants = this.range(36, 25);

    numberShoes = this.range(33, 16);

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private store: Store<Segment>) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
        });

        this.userService.getListData(this.baseUserPath).snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          ).subscribe(users => {
            users.map((item) => {
                if (this.id === item.key) {
                    this.users = item;
                    this.isEdit = !this.isEdit;
                    this.title = 'Editar Usuário';
                    this.subtitle = 'Usuário atualizado com sucesso!';
                }
            });
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.isEdit) {
            this.updateUser();
        } else {
            this.saveUser();
        }
    }

    updateUser() {
        this.userService.updateUser(this.baseUserPath, this.users.key, this.users);
    }

    saveUser() {
        this.userService.createUser(this.baseUserPath, this.users);
        this.users = new Users();
    }

    newUser(): void {
        this.submitted = false;
        this.users.active = true;
        this.router.navigate(['/user']);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    range(start, end) {
        return Array.from({length: end}, (x, i) => i + start);
    }

}
