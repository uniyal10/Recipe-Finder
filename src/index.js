import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Main from "./components/main";
import Form from "./components/form";
import "./styles.css";

class App extends Component {
  state = {
    meals: [],
    loading:false
  };

  addMeal = name => {
    // console.log(name);
    this.setState({loading:true})
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(res => {
        // console.log(res);
        this.setState({
          meals: res.data.meals,
          loading:false
        });
      });
      return 0;
  };
  render() {
    return (
      <div className="App">
        <Form addMeal={this.addMeal} />
          <div id="refresh_icon">
             {this.state.loading && <i className="fa fa-refresh fa-spin"></i>}
          </div>
        <Main meals={this.state.meals} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
