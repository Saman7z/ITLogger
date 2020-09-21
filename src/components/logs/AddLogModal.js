import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLogMsg } from "../../actions/logActions";
import PropTypes from 'prop-types';
import {getTechs} from '../../actions/techAction';

//! End Imports
const AddLogModal = ({ addLogMsg, techs, getTechs }) => {
  const [msg, setMsg] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
 useEffect(() => {
  getTechs();
  
  //eslint-disable-next-line
 },[])
 
  const onSubmit = () => {
    if (msg === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      addLogMsg({ message:msg, tech, attention, date: new Date()});
      // clear fields
      setMsg("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              
              {techs.map(item => <option value={item.firstname+ ' '+ item.lastname} key={item.id}>{item.firstname} {item.lastname}</option>)}

              
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer" style={{ textAlign: "center" }}>
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn "
        >
          Enter
        </a>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};
AddLogModal.propTypes = {
  addLogMsg: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  techs: state.tech.techs
});
export default connect(mapStateToProps, { addLogMsg, getTechs })(AddLogModal);
