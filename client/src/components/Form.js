import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addEntrainement } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addEntrainement: entrainement => dispatch(addEntrainement(entrainement))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addEntrainement({ title, id });
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="field has-addons">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Primary input"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div class="control">
            <button class="button is-info" type="submit">
              Ajouter
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
