import { useEffect } from "react";
import "./App.css";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getItems } from "./features/CartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    <div className="loading">
      <h1>Loading...</h1>
    </div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Checkout />
    </div>
  );
}

export default App;
