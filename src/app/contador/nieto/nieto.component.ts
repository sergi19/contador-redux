import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { Store, select } from '@ngrx/store';
import { reset } from 'src/app/counter.actions';
import * as fromCount from '../../counter.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select('count'));
  }

  resetCount() {
    const action = new fromCount.ResetAction();
    this.store.dispatch(action);
  }

}
