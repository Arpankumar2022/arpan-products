import {ACTION_TYPES } from './useReducerConstant.js';

const UseReducerProcess1 = (state, action) =>{
  {/**
     One Approach to handle the multiple states condition
     Another is switch statements -- like below

     if(action==="FETCH_START"){
      return {
           loading : true,
           error: false,
           post: {},
         };
      } else if(action==="FETCH_SUCCESS"){
        return {
           loading : false,
           error : false,
           post: action.payload
        };
     } else if(action==="FETCH_ERROR"){
         return {
         loading : false,
          error : true,
          post: {}
         };
     }
  **/}
    console.log(action);
    switch(action.type){
     case ACTION_TYPES.FETCH_START :
                         return {
                                 loading : true,
                                 error: false,
                                 post: {},
                                };
      case ACTION_TYPES.FETCH_SUCCESS :
                         return {
                                   loading : false,
                                   error: false,
                                   post:  action.payload,
                                 };
      case ACTION_TYPES.FETCH_ERROR :
                          return {
                                   loading : false,
                                   error : true,
                                   post: {}
                                  };
       case ACTION_TYPES.CLOSE_POP_UP :
                                 return {
                                          loading : false,
                                          error : false,
                                          post: {}
                                         };
        default :
            return state;
        }
        };

export default UseReducerProcess1