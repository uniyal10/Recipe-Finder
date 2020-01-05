import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Main from "./components/main";
import Form from "./components/form";
import "./styles.css";

class App extends Component {
  state = {
    meals: []
  };
  addMeal = name => {
    // console.log(name);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(res => {
        // console.log(res.data.meals);
        this.setState({
          meals: res.data.meals
        });
      });
  };
  render() {
    return (
      <div className="App">
        <Form addMeal={this.addMeal} />
        <Main meals={this.state.meals} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
