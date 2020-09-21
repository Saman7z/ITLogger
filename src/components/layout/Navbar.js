import React from "react";
import { filterLogs } from "../../actions/logActions";
import { connect } from "react-redux";
const Navbar = ({filterLogs}) => {
  const searchInput = (e) => {
      //console.log(e.target.value);
    filterLogs(e.target.value);
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input type="search" id="search" onChange={searchInput} placeholder="Search Logs ..."/>
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="meterial-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, {filterLogs})(Navbar);
