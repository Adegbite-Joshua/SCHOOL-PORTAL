import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
// import"https://js.paystack.co/v1/inline.js"

const StudentPayment = () => {
    let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
  const [paymentType, setPaymentType] = useState(""); // Full or Half Payment
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
    setPaymentAmount(type === "full" ? 50000 : 25000); // Adjust the amounts accordingly
  };

  const initializePayment = async () => {
    var handler = PaystackPop.setup({
        key: 'pk_test_020bedb6004bb3a95bb5589b33405add7e4e79a2', // Replace with your public key
        email: 'student@example.com',
        amount: paymentAmount * 100, 
        currency: 'NGN', 
        ref: 'PROADE'+ Math.floor(Math.random() * 1000000000 + 1),
        callback: function(response) {
        var reference = response.reference;
        axios.post('', {
            
        })
    },
        onClose: function() {
        alert('Transaction was not completed, window closed.');
        },
    });
    handler.openIframe();
    // }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Student Payment</h2>

              {/* Payment Option Buttons */}
            <div className="mb-4">
                <label className="font-weight-bold">Payment Instructions:</label>
                <p>
                    1. Select your payment type (Full or Half Payment).
                    <br />
                    2. Click the "Pay Now" button to proceed with the payment through Paystack.
                </p>
            </div>
              <div className="mb-4">
                <label className="font-weight-bold">Select Payment Option:</label>
                <div className="d-flex justify-content-center">
                  {/* Full Payment */}
                  <button
                    className={`btn btn-primary ${
                      paymentType === "full" ? "active" : ""
                    } mr-2`}
                    onClick={() => handlePaymentTypeChange("full")}
                  >
                    Full Payment
                  </button>

                  {/* Half Payment */}
                  <button
                    className={`btn btn-success ${
                      paymentType === "half" ? "active" : ""
                    }`}
                    onClick={() => handlePaymentTypeChange("half")}
                  >
                    Half Payment
                  </button>
                </div>
              </div>

              {/* Payment Amount */}
              <div className="mb-4">
                <label className="font-weight-bold">Payment Amount:</label>
                <input
                  type="number"
                  value={paymentAmount}
                  readOnly
                  className="form-control"
                />
              </div>
              <div className="text-center">
                <button
                    className="btn btn-primary"
                    onClick={initializePayment}
                    disabled={paymentType==''}
                >
                    Pay Now
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPayment;
