import { GET_TECHS, TECHS_ERROR,SET_LOADING, DELETE_TECH, ADD_TECH } from '../actions/types'


//! Sets Loading to true
export const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };
//! Add Technician

 
export const addTech = (first, last) => async(dispatch) => {
    try {
    const res = await fetch("/techs", {
        method:"POST",
        body:JSON.stringify({firstname:first,lastname:last}),
        headers: {
          'Content-Type':'application/json'
        }
      })
     const data = await res.json()
     //console.log(data);
     dispatch({type:ADD_TECH,payload:data})
    } catch (error) {
      dispatch({type:TECHS_ERROR, payload:error.response.statusText})
    }
  }
  
  //! get techs
  export const getTechs = () =>async (dispatch) => {
    setLoading()
    try {
      const res = await fetch("/techs");
      const data = await res.json();
      dispatch({type:GET_TECHS, payload:data})
    } catch (error) {
      dispatch({type:TECHS_ERROR, payload:error.response.statusText})
    }
  };

  //! delete tech
  export const deleteTech = (id) => async (dispatch) => {
    
    try {
       await fetch(`/techs/${id}`, {
        method:"DELETE",
        headers: {
          'Content-Type':'application/json'
        }
      })
     
      dispatch({type:DELETE_TECH, payload:id})
    //  dispatch({type:DELETE_TECH, payload:id})
    } catch (error) {
      dispatch({type:TECHS_ERROR, payload:error.response.statusText})
 //console.log(error);
    }
  }