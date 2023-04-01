import React from "react";
import store, {StoreType} from "./redux-store";

export const StoreContext = React.createContext<StoreType>(store);

