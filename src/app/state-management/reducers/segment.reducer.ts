import { Action } from '@ngrx/store';
import { intitialState } from '../state/segment.state';
import { LOGIN_VALUE } from '../actions/segment.actions';

export function segmentReducer (state = intitialState, action: Action) {
  switch (action.type) {
    case LOGIN_VALUE: {
      return action;
    }

    default:
    return state;
  }
}
