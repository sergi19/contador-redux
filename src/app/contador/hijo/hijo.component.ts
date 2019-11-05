import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { multiply, divide } from 'src/app/counter.actions';
import * as fromCount from '../../counter.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select('count'));
  }

  multiply() {
    const action = new fromCount.MultiplyAction(2);
    this.store.dispatch(action);
  }

  divide() {
    const action = new fromCount.DivideAction(2);
    this.store.dispatch(action);
  }
}
