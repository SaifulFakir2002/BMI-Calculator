import './App.css'
import './index.css'



import React, { useState } from "react";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStyle, setBmiStyle] = useState({ background: "", color: "" });

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const h = height / 100;
    const bmiValue = weight / (h * h);
    const roundedBmi = bmiValue.toFixed(2);
    setBmi(roundedBmi);

    // Conditional style based on BMI (React style)
    if (bmiValue < 18.6) {
      setBmiStyle({ background: "#f1c40f", color: "red" });
    } else if (bmiValue < 24.9) {
      setBmiStyle({ background: "#2ecc71", color: "#ecf0f1" });
    } else {
      setBmiStyle({ background: "#e74c3c", color: "yellow" });
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-6 px-6 pb-6 pt-5 
    rounded-2xl shadow-[0_0_15px_#ED4C67] 
    relative bg-linear-to-b from-[#B53471] to-[#6F1E51]">
      <h1 className="text-[#d63031] text-[25px]
       font-bold text-center bg-white w-fit mx-auto px-5 py-1.5 rounded-2xl mb-5">
        BMI Calculator
      </h1>

      <form onSubmit={handleCalculate} className="my-4">
        <label className="text-white text-sm font-bold block" htmlFor="height">
          Height
        </label>
        <input
          id="height"
          type="number"
          placeholder="Height In CM"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full font-bold my-2 px-4 py-1.5 rounded bg-linear-to-b from-[#D980FA] to-[#FDA7DF] text-white placeholder-[#1B1464] outline-none"
        />

        <label className="text-white text-sm font-bold block" htmlFor="weight">
          Weight
        </label>
        <input
          id="weight"
          type="number"
          placeholder="Weight In KG"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full font-bold my-2 px-4 py-1.5 rounded bg-linear-to-b from-[#D980FA] to-[#FDA7DF] text-white placeholder-[#1B1464] outline-none"
        />

        <button
          type="submit"
          className="bg-[#f1f2f6] text-[#e84393] px-6 py-1.5 mt-2 rounded font-bold cursor-pointer transition duration-500 hover:bg-white"
        >
          Calculate
        </button>
      </form>

      {bmi && (
        <div className="result px-4 py-2 rounded mb-4 bg-white">
          <h4 className="text-[#192a56] text-[30px] 
           font-bold px-5 py-2 rounded w-fit">
            Your BMI Score
          </h4>
          <h2
            className="text-3xl font-extrabold px-5 py-2"
            style={{ background: bmiStyle.background, color: bmiStyle.color }}
          >
            {bmi}
          </h2>
        </div>
      )}

      <div className="Info bg-white px-4 py-3 rounded mt-5 space-y-3">
        <h4 className="font-bold">BMI Weight Guide</h4>
        <p className="bg-yellow-400 font-semibold text-red-600 px-5 py-2 rounded">Under Weight = Less than 18.6</p>
        <p className="bg-[#2ecc71] font-semibold text-white px-5 py-2 rounded">Normal Range = 18.6 and 24.9</p>
        <p className="bg-[#e74c3c] font-semibold text-yellow-300 px-5 py-2 rounded">OverWeight = Greater than 24.9</p>
      </div>
    </div>
  );
};

export default BmiCalculator;

