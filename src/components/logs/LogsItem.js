import React from "react";
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {deleteLog, setCurrent} from '../../actions/logActions'
const LogsItem = ({ log, deleteLog, editLog, setCurrent}) => {
  //console.log("in log items")
  const deleteLogItem = () => {
    deleteLog(log.id);
    M.toast({html:`log number ${log.id} Deleted`})
  }
  
  const setCurrentItem = () => {
    setCurrent(log)
  }
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : " blue-text"
          }`}
          onClick={setCurrentItem}
        >
          {log.message}
        </a>
        <br/>
        <span className="grey-text">
        <span className="black-text">ID #{log.id}</span> last updated by {' '}
        <span className="black-text">{log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={deleteLogItem}><i className="material-icons grey-text">delete</i></a>
      </div>
    </li>
  );
};
LogsItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog : PropTypes.func.isRequired,
  setCurrent : PropTypes.func.isRequired,
  
};
export default connect(null, {deleteLog, setCurrent})(LogsItem);
