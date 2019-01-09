export interface Segment {
  payload: {
    email: string;
    name: string;
    isLogged: boolean;
  };
}

export const intitialState: Segment = {
  payload: {
    name: '',
    email: '',
    isLogged: false
  }
};
