import { TestBed, async, inject } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { segmentReducer } from './segment.reducer';
import { Segment, intitialState } from '../state/segment.state';
import { LOGIN_VALUE } from '../actions/segment.actions';

describe('Segment Reducer', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({ segmentReducer })
        ]
      })
      .compileComponents();
  }));

  it('should have the initial value be empty',
    inject([Store], (store: Store<Segment>) => {
      expect(store).toBeTruthy();

      store.select('segmentReducer')
        .subscribe((state: Segment) => {
          expect(state.value).toEqual('varejo');
        });
    })
  );

  it('should have the value be dispatched value after handling the SEGMENT_VALUE action',
    inject([Store], (store: Store<Segment>) => {
      expect(store).toBeTruthy();
      intitialState.value = 'uniclass';

      const valueToDispatch = {value: 'uniclass'};

      store.dispatch({ type: LOGIN_VALUE, payload: { value: valueToDispatch } });

      store.select('segmentReducer')
        .subscribe((state: Segment) => {
          expect(state.value).toEqual('uniclass');
        });
    })
  );

  it('should have the value be dispatched value undefined after handling the SEGMENT_VALUE action',
  inject([Store], (store: Store<Segment>) => {
    expect(store).toBeTruthy();
    intitialState.value = 'personnalite';
    const valueToDispatch = undefined;

    store.dispatch({ type: LOGIN_VALUE, payload: { value: valueToDispatch } });

    store.select('segmentReducer')
      .subscribe((state: Segment) => {
        expect(state.value).toEqual('personnalite');
      });
  })
);
});
