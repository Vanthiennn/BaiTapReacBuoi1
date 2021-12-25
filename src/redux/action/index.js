// import { DELETE_USER, GET_KEYWORD,EDIT_USER ,SUBMIT_USER } from "../constant";
import * as ActionType  from "../constant";

const actDeleteUser = (user) => {
    return {
        type : ActionType.DELETE_USER,
        payload: user
      };
}

const actEditUser = (user) => {
  return {
        type : ActionType.EDIT_USER,
        payload : user
  };
}

const actSubmitUser = (user) => {
  return {
    type: ActionType.SUBMIT_USER,
    payload:user
  }
}

const actGetKeyword = (key) => {
  return {
    type: ActionType.GET_KEYWORD,
    payload:key
  }
}

const actDatGhe = (ghe) => {
  return {
      type:ActionType.DAT_GHE,
      ghe    
  }
}

const actHuyGhe = (soGhe) => {
  return {
      type:ActionType.HUY_GHE,
      soGhe
  }
}
export { actDeleteUser,actEditUser,actSubmitUser,actGetKeyword,actDatGhe,actHuyGhe }