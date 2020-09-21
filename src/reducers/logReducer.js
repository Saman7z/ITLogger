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
} from "../actions/types";

//! Imports End

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};
export default (state = initialState, action) => {
  // console.log("in log reducer")
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOGS:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case SET_CURRENT:
        return {
            ...state,
            current: action.payload
        }  
    case UPDATE_LOG:
        return {
            ...state,
            logs : state.logs.map(item => item.id === action.payload.id ? action.payload : item)
        }    
    case CLEAR_CURRENT:
        return {
            ...state,
            current: null
        }   
    case SEARCH_LOGS:
      return{
        ...state,
        logs:action.payload
      }     
    
    default:
      return state;
  }
};
