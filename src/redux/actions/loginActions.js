import * as types from "../types";
import axios from "axios";

export const saveUserInfo = (user) => {
  
    return{
        type : types.SAVE_USER_INFO,
        payload : user
    }
}

export const logoutUser = () => {
  
    return{
        type : types.LOG_OUT,
    }
}

