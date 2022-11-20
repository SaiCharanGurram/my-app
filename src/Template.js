import React from "react";

export default function Template() {
  return (
    <div
      style={{
        border: "1.5px solid rgba(0, 0, 0, 0.05)",
        // borderWidth: "2px",
        // borderColor: "gray",
        display: "flex",
        // flex: 1,
        flexDirection: "column",
        height: "24vh",
        width: "16vw",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: " rgba(0, 0, 0, 0.10)",
      }}
    >
      {" "}
      <body style={{ fontFamily: "sans-serif", marginTop: 10, color: "gray" }}>
        Tue
      </body>
      <img
        src={"https://openweathermap.org/img/wn/10d@2x.png"}
        // height="80"
        // width="120"
      />
      <div
        style={{
          display: "flex",
          // flex: 1,
          flexDirection: "row",
          width: "16vw",
          justifyContent: "space-evenly",
          // height: "5vh",
          marginTop: -15,
        }}
      >
        <p style={{ fontWeight: "bold", fontFamily: "revert" }}>27&deg;</p>
        <p>24&deg;</p>
      </div>
    </div>
  );
}
