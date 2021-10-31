import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/store';
import { deleteUser, loadUsers, selectUserAction } from 'src/app/store/actions/user/user.actions';
import { selectedUserSelector, usersSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() public users: User[] = [];
  @Input() public selectedUser: User | null = null;

  constructor(
    private userService: UserService,
    private store: Store<AppState>,
    ) {


  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }



  deleteUser(user: User) {
    this.store.dispatch(deleteUser({data: user}))
    console.log(`user '${user.name}' deleted successfully`);
  }

  selectUser(user: User, selectedUser: User | null) {
    this.store.dispatch(selectUserAction({data: this.isSelected(selectedUser, user) ?  null : user}))
  }

  checkSelected(selectedUser: User | null, user: User) {
    return this.isSelected(selectedUser, user) ? 'green' : 'black';
  }

  isSelected(selectedUser: User | null, user: User) {
    return selectedUser?._id === user._id;
  }

}
