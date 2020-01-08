import React, { Component } from "react";
import './components_css/form.css'

class Form extends Component {
  state = {
    name: null,
    loading:false
  };
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({loading:true})
    this.props.addMeal(this.state.name);
    setTimeout(()=>{
      this.setState({loading:false})
    },1000);
  };
  render() {
    return (
      <div className="form_container">
        <h1>Recipe Finder</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Enter the Name of the Dish"
              id="name"
              onChange={this.handleChange}
            />
            <button className="btn">{this.state.loading && <i className="fa fa-refresh fa-spin"></i>} Get Ingredient</button>
          </form>
      </div>
    );
  }
}

export default Form;
