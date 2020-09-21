import React, { useEffect } from "react";
import LogsItem from "./LogsItem";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";
//! End Imports
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    //console.log("in use effect");
    getLogs();
    //eslint-disable-next-line
  }, []);
  if (loading || logs === null) {
    return <Preloader />;
  } else {
    return (
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No Logs To Show...</p>
        ) : (
          logs.map((item) => <LogsItem log={item} key={item.id} />)
        )}
      </ul>
    );
  }
};
Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
  //console.log('in map state to porps');
  return ({
    log: state.log,
  });
}
  
  
export default connect(mapStateToProps, { getLogs })(Logs);
