//PaystackBtn.jsx

import axios from "axios";
import { toast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";


const PaystackBtn = (
  {
    user_name,
    user_surname,
    email,
    department,
    image
}
) => {

  const navigate=useNavigate()
  //'pk_test_92260f26f205fad022a6188a0897243b0718e486'
  //'10000'
  //
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const amount = import.meta.env.VITE_PAYSTACK_AMOUNT;
  //const email = import.meta.env.VITE_PAYSTACK_MAIL;

  const payWithPaystack = (event) => {
    event.preventDefault();
    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email,
      amount: amount,
      metadata: {
        custom_fields: [
          {
            display_name: "Mobile Number",
            variable_name: "mobile_number",
            value: "+2348012345678", // customer's mobile number
          },
        ],
      },
      callback: function (response) {
        // after the transaction has been completed
        // make post call to the server to verify payment
        // using transaction reference as post data
        const formData={
                'user_name':user_name,
                'user_surname':user_surname,
                'email':email,
                'department':department,
                'image':image,
                'reference':response.reference
        }
        axios
          .post(`https://sodapi.onrender.com/register?email=${email}&amount=${amount}`, formData)
          .then((res) => {
            console.log(res)
            if (res.data.success) {
              const responseBody=res.data
              // successful transaction
              toast({
                type: "foreground",
                title: "Success",
                description: "Successfully registered",
                variant: "default",
              });
              navigate("/id-card", { state: responseBody });
            } else {
              toast({
                type: "background",
                description: responseBody.message,
                variant: "destructive",
              });
          }})
          .catch((error) => {
            console.error("There was an error!", error);
          });
      },
      onClose: function () {
        // when the user closes the payment modal
        alert("Transaction was not completed, window closed.");
      },
    });
    handler.openIframe(); // open the paystack's payment modal
  };

  return (
    <div>
      <button
        className="mt-1 p-2 border bg-accent text-white hover:bg-secondary duration-300 rounded w-full"
        onClick={payWithPaystack}
      >
        Pay with Paystack
      </button>
    </div>
  );
};

export default PaystackBtn;
