import { GET_TECHS, TECHS_ERROR, SET_LOADING, DELETE_TECH, ADD_TECH } from "../actions/types";

const initialState = {
  techs: [],
  error: null,
  techloading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        techloading: false,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
        techloading:false
      };
    case SET_LOADING:
      return {
        ...state,
        techloading: true,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs:state.techs.filter(item => item.id !== action.payload),
        techloading:false
      }  
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        techloading:false
      }  
    default:
      return state;
  }
};
