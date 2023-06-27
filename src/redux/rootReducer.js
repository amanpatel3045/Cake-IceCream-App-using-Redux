import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer"


const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
});
export default rootReducer;
