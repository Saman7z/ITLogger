import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editLog } from "../../actions/logActions";
import {getTechs} from '../../actions/techAction';

const EditLogModal = ({ current, editLog,techs,getTechs }) => {
  const [msg, setMsg] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    getTechs();
    if (current) {
      setMsg(current.message);
      setAttention(current.attention);
      setTech(current.tech);
      //console.log(current);
    }
     //eslint-disable-next-line
  }, [current]);
  
  //console.log(current);
  const onSubmit = () => {
    if (msg === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      //console.log(msg, tech, attention);
      const newData = {
        id: current.id,
        date: new Date(),
        message:msg,
        attention,
        tech
      }
      editLog(newData);
      M.toast({html:`${tech}s job just got updated`})
      // clear fields
      setMsg("");
      setTech("");
      setAttention(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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
              {/* {console.log(techs)} */}
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
                  onChange={() => setAttention(!attention)}
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
EditLogModal.propTypes = {
  editLog: PropTypes.func.isRequired,
  current: PropTypes.object
};
const modalStyle = {
  width: "75%",
  height: "75%",
};
const mapStateToProps = (state) => ({
  current: state.log.current,
  techs: state.tech.techs
});
export default connect(mapStateToProps, { editLog,getTechs })(EditLogModal);
