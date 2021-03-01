import * as types from "../types";
import axios from "axios";

export const saveUserInfo = (user) => {
  console.log("USER....:" , user);
    return{
        type : types.SAVE_USER_INFO,
        payload : user
    }
}

