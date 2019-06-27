import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteEntrainement } from "../actions/index";
const mapStateToProps = state => {
  return { entrainements: state.entrainements };
};

const handleClick = id => {
  deleteEntrainement(id);
};

const ConnectedList = ({ entrainements }) => (
  <ul>
    {entrainements.map(el => (
      <li class="has-addons" key={el.id}>
        {el.title}
        <button
          id={el.id}
          onClick={e => handleClick(this.id)}
          class="button is-danger"
        >
          X
        </button>
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

List.propTypes = {
  entrainements: PropTypes.object.isRequired
};

export default List;
