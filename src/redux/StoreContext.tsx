import React, {FC} from "react";
import store, {StoreType} from "./redux-store";

export const StoreContext = React.createContext<StoreType>(store);

export const Provider: FC = (props) => {
  return <StoreContext.Provider value={store}>
    {
      props.children
    }
  </StoreContext.Provider>;
};
