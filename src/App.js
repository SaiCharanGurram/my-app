import moment from "moment";
import React from "react";
import Template from "./Template";

function App() {
  async function apicall() {
    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly&appid={weatherappApiKey}";
    const res = await fetch(url);
    const data = await res.json();
    const result = data.daily.map((i) => ({
      day: moment(i.dt).format("dddd"),
      date: moment(i.dt).format("MMMM Do YYYY, h:mm:ss a"),
      max: i.temp.max,
      min: i.temp.min,
      icon: i.weather[0].icon,
    }));
    console.log("result", result);
    console.log("data", data);
    // const t = new Date(data.daily[0].dt);
    // console.log(moment(t).format("MMMM Do YYYY, h:mm:ss a"));
  }
  apicall();
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Template />
      <Template />
      <Template />
      <Template />
      <Template />
    </div>
  );
}

export default App;
