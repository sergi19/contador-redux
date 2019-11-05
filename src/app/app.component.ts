import { Component, OnInit } from '@angular/core';
import { Store, Action, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCount from './counter.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    const action = new fromCount.IncrementAction();
    this.store.dispatch(action);
  }

  decrement() {
    const action = new fromCount.DecrementAction();
    this.store.dispatch(action);
  }
}
