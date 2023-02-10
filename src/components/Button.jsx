import React, { useState } from "react";
import Mainpage from "./Mainpage";
import { BrowserRouter, Link } from "react-router-dom";
const Button = () => {
  const [user, setUser] = useState("");

  const [allEntry, setAllEntry] = useState([]);

    const submitForm = () => {
    const newEntry = { user: user };
    setAllEntry([...allEntry, newEntry]);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[34px] font-semibold">Hello user </h2>
        <h3 className="text-[20px] ">Press the button to get started </h3>

        {/* <form className="  rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="on"
            value={user}
            // onChange={handleinput}
            onChange={(e) => setUser(e.target.value)}
          />
        </form> */}
        <Link to="/calculate">
          <button
            type="submit"
            class="bg-sky-900 hover:bg-sky-300 p-[30px] rounded-[33px] text-white hover:text-black  font-normal hover:font-semibold mt-10 pl-90"
          >
            CLick me !!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Button;
