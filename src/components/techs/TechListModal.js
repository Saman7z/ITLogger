import React, { useEffect } from "react";
import TechItem from './TechItem';
import {connect} from 'react-redux';
import {getTechs} from '../../actions/techAction'
//! IMport END
const TechListModal = ({getTechs, techs, loading}) => {
  // const [techs, setTechs] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
   // console.log('use effect started tech');
    getTechs();
    //eslint-disable-next-line
  }, []);

 
//console.log(techs);
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h3>Technician List</h3>
        <ul className="collection">
          {!loading &&
            techs.map((item) => (
              <TechItem tech={item} key={item.id}/>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading
})

export default connect(mapStateToProps,{getTechs})(TechListModal);
