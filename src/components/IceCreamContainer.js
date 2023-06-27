import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {buyIceCream} from "../redux/iceCream/IceCreamActions";

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecream:{numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>BUY ICECREAM</button>
    </div>
  );
};

export default IceCreamContainer;
