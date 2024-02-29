import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { useAuth } from "../../context/AuthContext";
import { THANKYOU } from "../../routes/routing.routes";
import "./paymentdetails.css";
import { useCartContext } from "../../context/CartContext";

export default function Payment() {
  const { user } = useAuth();
  const context = useCartContext();
  const { setCart } = context;
  const navigate = useNavigate();

  function handlePayment() {
    navigate(THANKYOU);
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }
  
  
  return (
    <form className="form-container">
      <div>
        <label>Your name: </label>
        <input type="text" value={user?.name}></input>
      </div>
      <div>
        <label>Your email: </label>
        <input type="text" value={user?.email}></input>
      </div>

      <h3>Payment details</h3>
      <div>
        <label>Credit card: </label>
        <input type="number" className="card-details"></input>
      </div>
      <div className="payment-icons">
        <img className="payment-icon"src="/src/assets/google-pay-64.png" />
        <img className="payment-icon" src="/src/assets/apple-pay-64.png" />
        <img className="payment-icon" src="/src/assets/paypal-64.png" />
      </div>
      
      <Button className="payment-button" onClick={handlePayment}>
        Pay now
      </Button>
    </form>
  );
}
