import React, { Component } from "react";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <section className="calculator">
        <section id="result">0</section>
        <section id="display">0</section>
        <button id="equals">=</button>
        <button id="clear">AC</button>
        <button id="add">+</button>
        <button id="subtract">-</button>
        <button id="multiply">x</button>
        <button id="divide">/</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="zero">0</button>
        <button id="decimal">.</button>
      </section>
    );
  }
}

export default Calculator;
