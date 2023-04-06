import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const name = require("@rstacruz/startup-name-generator");

export default function MainPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  function handleSearch() {
    setResult(name(input));
  }
  return (
    <div>
      <div className="header">
        <Typewriter words={["NameTap!!"]} />
        <p style={{ fontSize: "20px" }}>
          Confused about the name for your app ?? We can suggest you names based
          on your search.
        </p>
      </div>
      <div className="bodydisplay">
        <div>
          <input
            onChange={(event) => setInput(event.target.value)}
            className="searchBox"
            type="search"
            placeholder="Search"
          />
        </div>
        {"     "}
        <div>
          <button className="butn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <img
        style={{ width: "10%", height: "20%" }}
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/question-marks-and-man-showing-confusion-or-unsure_fJpTrEPu_SB_PM.jpg"
        alt="confuse"
      />
      <div className="result">
        {result.map((item) => {
          return <p className="namecard"> {item}</p>;
        })}
      </div>
    </div>
  );
}
