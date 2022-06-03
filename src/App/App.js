import React from "react";
import "./Css/App.css";

export default class App extends React.Component {
  state = {
    ValueCalculate: "",
  };

  FuncClear = () => {
    this.setState({
      ValueCalculate: "",
    });
  };

  FuncDivide = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "/",
    });
  };

  FuncMultiplication = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "*",
    });
  };

  FuncNumberSeven = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "7",
    });
  };

  FuncNumberEight = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "8",
    });
  };

  FuncNumberNine = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "9",
    });
  };

  FuncNegative = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "-",
    });
  };

  FuncNumberFour = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "4",
    });
  };

  FuncNumberFive = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "5",
    });
  };

  FuncNumberSix = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "6",
    });
  };

  FuncPlus = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "+",
    });
  };

  FuncNumberOne = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "1",
    });
  };

  FuncNumberTwo = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "2",
    });
  };

  FuncNumberThree = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "3",
    });
  };

  FuncNumberZero = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "0",
    });
  };

  FuncNumberZeroZero = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + "00",
    });
  };

  FuncPoint = () => {
    this.setState({
      ValueCalculate: this.state.ValueCalculate + ".",
    });
  };

  FuncEqual = () => {
    try {
      let Result = eval(this.state.ValueCalculate);
      if (Result === "undefined") {
        this.setState({
          ValueCalculate: "",
        });
      } else {
        this.setState({
          ValueCalculate: Result,
        });
      }
    } catch {
      alert("Error");
      this.setState({
        ValueCalculate: "",
      });
    }
  };

  render() {
    return (
      <section className="section_calculator">
        <section className="section_inner_calculator">
          <section className="section_row_result_inner_calculator">
            {this.state.ValueCalculate}
          </section>

          <section className="section_row_button_one_inner_calculator">
            <section
              className="section_one_button_row_one_inner_calculator"
              onClick={() => {
                this.FuncClear();
              }}
            >
              C
            </section>

            <section
              className="section_two_button_row_one_inner_calculator"
              onClick={() => {
                this.FuncDivide();
              }}
            >
              /
            </section>

            <section
              className="section_three_button_row_one_inner_calculator"
              onClick={() => {
                this.FuncMultiplication();
              }}
            >
              *
            </section>
          </section>

          <section className="section_row_button_two_inner_calculator">
            <section
              className="section_one_button_row_two_inner_calculator"
              onClick={() => {
                this.FuncNumberSeven();
              }}
            >
              7
            </section>

            <section
              className="section_two_button_row_two_inner_calculator"
              onClick={() => {
                this.FuncNumberEight();
              }}
            >
              8
            </section>

            <section
              className="section_three_button_row_two_inner_calculator"
              onClick={() => {
                this.FuncNumberNine();
              }}
            >
              9
            </section>

            <section
              className="section_four_button_row_two_inner_calculator"
              onClick={() => {
                this.FuncNegative();
              }}
            >
              -
            </section>
          </section>

          <section className="section_row_button_three_inner_calculator">
            <section
              className="section_one_button_row_three_inner_calculator"
              onClick={() => {
                this.FuncNumberFour();
              }}
            >
              4
            </section>

            <section
              className="section_two_button_row_three_inner_calculator"
              onClick={() => {
                this.FuncNumberFive();
              }}
            >
              5
            </section>

            <section
              className="section_three_button_row_three_inner_calculator"
              onClick={() => {
                this.FuncNumberSix();
              }}
            >
              6
            </section>

            <section
              className="section_four_button_row_three_inner_calculator"
              onClick={() => {
                this.FuncPlus();
              }}
            >
              +
            </section>
          </section>

          <section className="section_row_button_four_inner_calculator">
            <section
              className="section_one_button_row_four_inner_calculator"
              onClick={() => {
                this.FuncNumberOne();
              }}
            >
              1
            </section>

            <section
              className="section_two_button_row_four_inner_calculator"
              onClick={() => {
                this.FuncNumberTwo();
              }}
            >
              2
            </section>

            <section
              className="section_three_button_row_four_inner_calculator"
              onClick={() => {
                this.FuncNumberThree();
              }}
            >
              3
            </section>

            <section className="section_four_button_row_four_inner_calculator"></section>
          </section>

          <section className="section_row_button_five_inner_calculator">
            <section
              className="section_one_button_row_five_inner_calculator"
              onClick={() => {
                this.FuncNumberZero();
              }}
            >
              0
            </section>

            <section
              className="section_two_button_row_five_inner_calculator"
              onClick={() => {
                this.FuncNumberZeroZero();
              }}
            >
              00
            </section>

            <section
              className="section_three_button_row_five_inner_calculator"
              onClick={() => {
                this.FuncPoint();
              }}
            >
              .
            </section>

            <section
              className="section_four_button_row_five_inner_calculator"
              onClick={() => {
                this.FuncEqual();
              }}
            >
              =
            </section>
          </section>
        </section>
      </section>
    );
  }
}
