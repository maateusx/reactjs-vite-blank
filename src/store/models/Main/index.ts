import { ActionTypes, action, thunk } from "easy-peasy";

import ExampleAPI from "api/Example";

export interface MainInterface {
  loading: boolean;
  setLoading: ActionTypes;
  example: ActionTypes;
}

export const Main: MainInterface = {
  loading: false,

  setLoading: action((state, payload) => {
    state.loading = !!payload;
  }),

  example: thunk(async (actions) => {
    actions.setLoading(true);
    await ExampleAPI.postExample();
  }),
};

export default Main;