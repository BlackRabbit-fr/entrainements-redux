import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
export class Post extends Component {
  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }
  render() {
    return (
      <ul>
        {this.props.entrainements.map(el => (
          <li>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    entrainements: state.remoteEntrainements.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(Post);
