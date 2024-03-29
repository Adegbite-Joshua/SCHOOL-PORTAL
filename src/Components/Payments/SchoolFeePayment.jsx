import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import StudentSideNav from '../StudentNav/StudentSideNav';
import fetchStudentInfo from '../../CustomHooks/fetchStudentInfo';
import checkStudentFeeStatus from "../../CustomHooks/checkStudentFeeStatus";


const StudentPayment = () => {
  let studentInfo = useSelector((state)=>state.studentInformation.studentInformation);
  const [paymentType, setPaymentType] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  let fetching = useSelector((state)=>state.studentInformation.studentFetchingState);
  const [paymentDisplayOption] = checkStudentFeeStatus();
  
  let [name] = fetchStudentInfo();
  let fullAmount = 50000;
  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
    setPaymentAmount(type === "full" ? fullAmount : fullAmount/2);
  };

  const initializePayment = async () => {
    var handler = PaystackPop.setup({
        key: 'pk_test_020bedb6004bb3a95bb5589b33405add7e4e79a2', // Replace with your public key
        email: studentInfo.email,
        amount: paymentAmount * 100, 
        currency: 'NGN', 
        ref: 'PROADE'+ Math.floor(Math.random() * 1000000000 + 1),
        callback: function(response) {
        var reference = response.reference;
        console.log({
          type: paymentType,
          amount: paymentAmount,
          ref: reference,
          studentClass: studentInfo.class,
          email: studentInfo.email
      });
        axios.post('http://localhost:7777/student/fee_payment', {
            type: paymentType,
            amount: paymentAmount,
            ref: reference,
            studentClass: studentInfo.class,
            email: studentInfo.email
        })
        .then((res)=>{
          console.log(res);
        })
        .catch((error)=>{
          console.log(error);
        })
    },
        onClose: function() {
        alert('Transaction was not completed, window closed.');
        },
    });
    handler.openIframe();
  };


  return (
    <>
      <div className='d-flex allWrap'>
        <StudentSideNav/>
        {paymentDisplayOption != 'full' && <>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title text-center">Student Payment</h2>
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
                      {paymentDisplayOption=='indebt' && <>
                        <div className="d-flex justify-content-center ">
                          <button className={`btn btn-primary ${paymentType === "full" ? "active" : "" } mr-2`}
                            onClick={() => handlePaymentTypeChange("full")}
                          > Full Payment</button>

                          <button className={`btn btn-success ${paymentType === "half" ? "active" : "" }`}
                            onClick={() => handlePaymentTypeChange("half")}
                          > Half Payment</button>
                        </div>
                      </>}
                      {paymentDisplayOption=='half' && <>
                      <button className={`d-block btn btn-primary mr-2`}
                            onClick={() => handlePaymentTypeChange("otherhalf")}
                          > Second Part Payment</button>
                      </>}
                    </div>
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
        </>}
        {paymentDisplayOption == 'full' && <>
        <div className="container mt-5 vh-100 row justify-content-center align-items-center">
            <div className=" ">
              <div className="success-icon text-center">
                <i style={{fontSize: 80}} className="fas fa-check-circle text-success"></i>
              </div>
              <h2 className="success-message text-center text-success">Payment Completed</h2>
            </div>
          </div>
        </>}
      </div>

    </>
  );
};

export default StudentPayment;
