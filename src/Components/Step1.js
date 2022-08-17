import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";

const Step1 = (props) => {
  const navigate = useNavigate();
  // const [totalAmount, setTotalAmount] = useState(" ");
  // const [percent, setPercent] = useState(" ");
  // const [totalValue, setTotalValue] = useState(" ");
  const value = useContext(DataContext);
  console.log(value);
  // useEffect(()=>{
  //   setTotalAmount(totalAmount)
  //   setPercent(percent)
  //   setTotalValue(totalValue)
  // },[totalAmount, totalValue, percent])
  return (
    <>
      {/* {value.value} */}
      <h1>Step 1 Page</h1>

      <div class="flex-class">
        <label className="font-20">Total Amount</label>
        <input
          
          className="input-class"
          value={value.totalAmount}
          onChange={(evt) => {
            const re = /^[0-9\b]+$/;
            if (evt.target.value === '' || re.test(evt.target.value)) {
              value.setTotalAmount(evt.target.value);
            }
           
          }}
        />
      </div>
      <div class="flex-class">
        <label className="font-20">Percent</label>
        <input
          
          className="input-class"
          value={value.percent}
          onChange={(evt) => {
            const re = /^[0-9\b]+$/;
            if (evt.target.value === '' || re.test(evt.target.value)) {
              value.setPercent(evt.target.value);
            }
          
          }}
        />
      </div>

      <div class="flex-class">
        <label className="font-20">Total Value</label>
        <input
          
          className="input-class"
          value={(value.percent / 100) * value.totalAmount}
        />
      </div>

      {/* Button */}
      <p>
        <button
          className="button-class"
          onClick={() => {
            if (
              value.totalAmount >= 10 &&
              value.totalAmount <= 100000 &&
              value.percent >= 1 &&
              value.percent <= 100
            )
              navigate("/2");
            else {
              // if( value.totalAmount >= 10 &&
              //   value.totalAmount <= 100000 ){
              //     alert("Percentage should be between 1 to 100")
              //   }
              //   else if(value.percent >= 1 &&
              //     value.percent <= 100){
              //     alert("Percentage should be between 1 to 100")
              //   }
                // else{
                  alert("Please check\nTotal amount should be between 10 to 100000\nPercentage should be between 1 to 100")
                // }
            }
          }}
        >
          Next
        </button>
      </p>
      {/* <p>
        <button
          onClick={() =>
            value.setValue("Khatoon")
          }
        >
          change conetxt
        </button>
      </p> */}
    </>
  );
};

export default Step1;
