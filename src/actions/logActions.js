import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOGS,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS

} from "./types";

//! GETTING all the logs
export const getLogs = () => async (dispatch) => {
  try {
    //console.log("in action get log");
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

//! Sets Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//! ADD a new log msg to the board

export const addLogMsg = (info) => async (dispatch) => {
  setLoading();
  const res = await fetch("/logs", {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  try {
    dispatch({ type: ADD_LOGS, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

//! Deleting A particular item with id
export const deleteLog = (id) => async (dispatch) => {
  setLoading();
  try {
   await fetch(`/logs/${id}`,{
      method:"DELETE",
      headers: {
        'Content-Type':'application/json'
      }
    });
    
    dispatch({ type: DELETE_LOG, payload: id });
  } catch (error) {
    dispatch({type:LOGS_ERROR,
    payload:error.response.data
    })
  }
};

//! edit Log

export const editLog = (info) => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch(`/logs/${info.id}`, {
      method:"PUT",
      body:JSON.stringify(info),
      headers : {
        'Content-Type':'application/json'
      }
    })
    const data = await res.json()
    dispatch({type:UPDATE_LOG, payload:data})
  } catch (error) {
    dispatch({type:LOGS_ERROR, payload:error.response.data})
  }
}

//! set Current Log to fill and then Edit somewhere eles
export const setCurrent = (log) => (dispatch) =>{
  dispatch({type:SET_CURRENT, payload:log})
}

//! clear current 
export const clearCurrent = () => (dispatch) =>{
  dispatch({type:CLEAR_CURRENT})
}

//! Search data 

export const filterLogs = (info) => async (dispatch) => {
  try {
    const res = await fetch(`/logs?q=${info}`)
    const data = await res.json()
    dispatch({type:SEARCH_LOGS, payload:data})
  } catch (error) {
    dispatch({type:LOGS_ERROR, payload:error.response.data})
  } 
}

