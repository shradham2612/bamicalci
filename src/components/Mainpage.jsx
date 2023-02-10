import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
//import { setUser } from "./Button";
import submitForm from "./Button";

const Mainpage = () => {
  const [status, setstatus] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmires, setbmires] = useState(null);

  function calculatebmi() {
    let BMI = Number(weight / (height / 100) ** 2).toFixed(2);
    setbmires(BMI);
    // console.log({BMI});
    let bmistatus = getstatus(BMI);
    setstatus(bmistatus);

    setHeight("");
    setWeight("");
  }
  function getstatus(BMI) {
    if (BMI < 18.5) return "Underweight";
    else if (BMI >= 18.5 && BMI < 24.9) return "Normal";
    else if (BMI >= 25 && BMI < 40) return "Overweight";
    else return "Enter data";
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1></h1>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="font-bold text-center pb-[30px] tracking-wide text-[18px]">
              BMI CALCULATOR
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="height"
              >
                Height
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="height"
                type="height"
                placeholder="Height in cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="weight"
              >
                Weight
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="weight"
                type="weight"
                placeholder="Weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline tracking-wider  "
                type="button"
                onClick={calculatebmi}
              >
                Get Result
              </button>
            </div>
            {bmires && (
              <div className="mt-5 font-semibold ">
                <p className="hover:font-bold cursor-pointer">
                  Conclusion : {status}
                </p>
                <p className="hover:font-bold cursor-pointer ">
                  BMI : {bmires}
                </p>
              </div>
            )}
          </form>
        </div>
        <Link to="/">
          <button className="bg-pink-200 p-4 w-full hover:bg-pink-300 font-normal hover:font-semibold">
            Click to opt out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Mainpage;
