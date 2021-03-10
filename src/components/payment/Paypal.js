import React from "react";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/actions/authAction";

function PayPal({ user, total }) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();
  const dispatch = useDispatch();

  // To show PayPal buttons once the component loads
  React.useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          layout: "horizontal",
          tagline: "false",
          shape: "pill",
        },
        createOrder: (user, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "New student registration",
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (user, actions) => {
          await actions.order.capture();
          setPaid(true);
          user && dispatch(registerUser(user));
        },
        onError: (err) => {
          setError(err);
        },
      })
      .render(paypalRef.current);
  }, [dispatch, user, total]);

  // If the payment has been made
  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  // Default Render
  return (
    <>
      <Typography component="h5" variant="h5" align="center">
        Total Amount ${total}
      </Typography>
      <div ref={paypalRef} />
    </>
  );
}

export default PayPal;
