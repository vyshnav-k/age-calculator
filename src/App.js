import "./App.css";
import Input from "./components/input/Input";
import Axios from "axios";
import React, { useState } from "react";

function App() {
  const [country, setCountry] = useState("");
  Axios.get("https://freegeoip.app/json/").then((response) => {
    console.log(response.data.country_name);
    if (response.data.country_name == "India") {
      setCountry(response.data.country_name);
    }
  });

  return (
    <div>
      {country ? (
        <Input />
      ) : (
        <div>
          <h3>You are outside of india </h3>
          <h3>access denied!!</h3>
        </div>
      )}
    </div>
  );
}

export default App;
