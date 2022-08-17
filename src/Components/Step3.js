import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { DataContext } from "../App";

const Step1 = (props) => {
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location);
  const value = useContext(DataContext);
  var totalValue = (value.percent / 100) * value.totalAmount;

  console.log(value);
  return (
    <>
      <h1>Step 3 Page</h1>

      <div class="flex-class">
        <label className="font-20">Final amount</label>
        <input
          className="input-class"
          value={(value.percent / 100) * value.totalAmount}
        />
      </div>
      <div class="flex-class">
        <label className="font-20">Percent Splits</label>
        {((value.percent1 / 100) * totalValue).toFixed(2)},{((value.percent2 / 100) * totalValue).toFixed(2)},{((value.percent3 / 100) * totalValue).toFixed(2)}
      </div>
      {/* <div className="flex-class">
        <input
          className="input-class"
          value={(value.percent1 / 100) * value.totalValue}
        />
      </div>
      <div className="flex-class">
        <input
          className="input-class"
          value={(value.percent2 / 100) * value.totalValue}
        />
      </div>
      <div className="flex-class">
        <input
          className="input-class"
          value={(value.percent3 / 100) * value.totalValue}
        />
      </div> */}
      <div>
        <button className="button-class" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </>
  );
};

export default Step1;
