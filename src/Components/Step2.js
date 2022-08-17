import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "../App";

const Step1 = (props) => {
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location);
  const value = useContext(DataContext);
  var totalValue = (value.percent / 100) * value.totalAmount;
  return (
    <>
      {value.firstname}
      <h1>Step 2 Page</h1>

      <div class="flex-class">
        <label className="font-20">Percent 1</label>
        <input
          className="input-class"
          value={value.percent1}
          onChange={(evt) => {
            const re = /^[0-9\b]+$/;
            if (evt.target.value === '' || re.test(evt.target.value)) {
              value.setPercent1(evt.target.value);
            }
          }}
        />
      </div>
      <div className="flex-class">
        {" "}
        <label className="font-20"> Calculated Percent 1</label>
        <input
          className="input-class"
          value={((value.percent1 / 100) * totalValue).toFixed(2)}
        />
      </div>
      <div className="flex-class">
        <label className="font-20">Percent 2</label>
        <input
          className="input-class"
          value={value.percent2}
          onChange={(evt) => {
            const re = /^[0-9\b]+$/;
            if (evt.target.value === '' || re.test(evt.target.value)) {
              value.setPercent2(evt.target.value);
            }
          }}
         
        />
      </div>

      <div className="flex-class">
        {" "}
        <label className="font-20"> Calculated Percent 2</label>
        <input
          className="input-class"
          value={((value.percent2 / 100) * totalValue).toFixed(2)}
        />
      </div>

      <div className="flex-class">
        <label className="font-20">Percent 3</label>
        <input
          className="input-class"
          value={value.percent3}
          onChange={(evt) => {
            const re = /^[0-9\b]+$/;
            if (evt.target.value === '' || re.test(evt.target.value)) {
              value.setPercent3(evt.target.value);
            }
          }}
        />
      </div>
      <div className="flex-class">
        {" "}
        <label className="font-20"> Calculated Percent 3</label>
        <input
          className="input-class"
          value={((value.percent3 / 100) * totalValue).toFixed(2)}
        />
      </div>

      {/* Button */}

      <div className="flex-class">
        <button className="button-class" onClick={() => navigate(-1)}>
          Back
        </button>

        <button
          className="button-class"
          onClick={() => {
            if(parseInt(value.percent1) + parseInt(value.percent2) + parseInt(value.percent3) !== 100){
              alert("All percents must add upto 100")
            }
            else{
               navigate("/3");
            }
           
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step1;
