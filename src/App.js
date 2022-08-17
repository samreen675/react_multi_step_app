import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import { createContext } from 'react';
export const DataContext = createContext('Default Value');


function App() {
  const [value, setValue] = useState("Samreen");
  const [totalAmount, setTotalAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [percent1, setPercent1] = useState("");
  const [percent2, setPercent2] = useState("");
  const [percent3, setPercent3] = useState("");
  const [calculatedPercent1, setCalculatedPercent1] = useState("");
  const [calculatedPercent2, setCalculatedPercent2] = useState("");
  const [calculatedPercent3, setCalculatedPercent3] = useState("");

  return (
    <div className="App">
      <DataContext.Provider value={{
        value ,setValue,
        totalAmount , setTotalAmount,
        percent, setPercent,
        totalValue, setTotalValue,
        percent1, setPercent1,
        percent2 ,setPercent2,
        percent3, setPercent3,
        // calculatedPercent1, setCalculatedPercent1,
        // calculatedPercent2 ,setCalculatedPercent2,
        // calculatedPercent3, setCalculatedPercent3
      }}>
          <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/2" element={<Step2 />} />
          <Route path="/3" element={<Step3 />} />
        </Routes>
      </Router>
      </DataContext.Provider>
    
    </div>
  );
}

export default App;
