import React, { Component } from "react";

class Calculator extends Component {
  state = {
    expression: "0",
    display: "0"
  };

  resetCalc = () => {
    this.setState({
      expression: "0",
      display: "0"
    });
  };

  addNum = num => {
    const currentDisplayNow = this.state.display.toString();
    const currentExpressionNow = this.state.expression.toString();
    if (num === "." && currentDisplayNow.includes(".")) {
      return;
    }
    if (
      (typeof num === "number" || num === ".") &&
      currentDisplayNow !== "0" &&
      this.props.symbols.indexOf(currentDisplayNow) < 0 &&
      !currentExpressionNow.includes("=")
    ) {
      this.setState({
        display: currentDisplayNow + num,
        expression: currentExpressionNow + num
      });
    } else if (currentExpressionNow.includes("=")) {
      this.setState({
        display: num,
        expression: num
      });
    } else {
      this.setState({
        display: num,
        expression:
          currentExpressionNow === "0"
            ? num
            : num === 0
            ? currentExpressionNow
            : currentExpressionNow + num
      });
    }
  };

  addSymbol = sym => {
    let currentExpressionNow =
      this.state.expression === "0" ? "" : this.state.expression.toString();

    currentExpressionNow = currentExpressionNow.replace(/[*][-]/, "");
    currentExpressionNow = currentExpressionNow + sym;
    currentExpressionNow = currentExpressionNow.replace(/([*+-/])(\1)/g, "$1");
    if (currentExpressionNow.includes("=")) {
      currentExpressionNow = currentExpressionNow.split("=")[1];
    }
    this.setState({
      expression:currentExpressionNow,
      display: sym
    });
  };

  calculate = () => {
    let expr = this.state.expression;
    const lastChar = this.state.expression.split("")[
      this.state.expression.length - 1
    ];
    if (this.props.symbols.indexOf(lastChar) > -1) {
      expr = expr.split("").reverse();
      expr.shift();
      expr = expr.reverse().join("");
    }
    const result = eval(expr);
    const newExpression = expr + "=" + result;
    this.setState({
      expression: newExpression,
      display: result
    });
  };

  render() {
    return (
      <section className="calculator">
        <section id="result">{this.state.expression}</section>
        <section id="display">{this.state.display}</section>
        <button id="equals" onClick={this.calculate}>
          =
        </button>
        <button id="clear" onClick={this.resetCalc}>
          AC
        </button>
        <button id="add" onClick={() => this.addSymbol("+")}>
          +
        </button>
        <button id="subtract" onClick={() => this.addSymbol("-")}>
          -
        </button>
        <button id="multiply" onClick={() => this.addSymbol("*")}>
          x
        </button>
        <button id="divide" onClick={() => this.addSymbol("/")}>
          /
        </button>
        <button id="one" onClick={() => this.addNum(1)}>
          1
        </button>
        <button id="two" onClick={() => this.addNum(2)}>
          2
        </button>
        <button id="three" onClick={() => this.addNum(3)}>
          3
        </button>
        <button id="four" onClick={() => this.addNum(4)}>
          4
        </button>
        <button id="five" onClick={() => this.addNum(5)}>
          5
        </button>
        <button id="six" onClick={() => this.addNum(6)}>
          6
        </button>
        <button id="seven" onClick={() => this.addNum(7)}>
          7
        </button>
        <button id="eight" onClick={() => this.addNum(8)}>
          8
        </button>
        <button id="nine" onClick={() => this.addNum(9)}>
          9
        </button>
        <button id="zero" onClick={() => this.addNum(0)}>
          0
        </button>
        <button id="decimal" onClick={() => this.addNum(".")}>
          .
        </button>
      </section>
    );
  }
}

Calculator.defaultProps = {
  symbols: ["+", "-", "/", "*"]
};

export default Calculator;
