import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {deleteTech} from '../../actions/techAction'
const TechItem = ({ tech, deleteTech }) => {
  const onClick = () => {
 //   console.log(tech.id);
    deleteTech(tech.id)
  }
  return (
    <li className="collection-item">
      <div>
        {tech.firstname} {tech.lastname}
        <a href="#!" className="secondary-content" onClick={onClick}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
TechItem.propType = {
  tech: PropTypes.object.isRequired,
};
export default connect(null, {deleteTech})(TechItem);
