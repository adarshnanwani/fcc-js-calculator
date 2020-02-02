import React from "react";
import Calculator from "./Calculator";

const Main = () => {
  return (
    <section className="grid main">
      <Calculator />
      <h4>
        Built with <span style={{ color: "red" }}>&#10084;</span> by Ady
      </h4>
    </section>
  );
};

export default Main;
