import { createStore, StoreProvider } from "easy-peasy";

import Models, { ModelsInterface } from "./models";

const store = createStore<ModelsInterface>(Models);

const Store = ({ children = null }) => (
  <StoreProvider store={store}>{children}</StoreProvider>
);

export default Store;
