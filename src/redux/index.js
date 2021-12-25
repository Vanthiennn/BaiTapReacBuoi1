// Reducer
import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import BaiTapOanTuXiReducer from "./reducers/BaiTapOanTuXiReducer";
import BaiTapDatVeReducer from "./reducers/BaiTapDatVeReducer";
const rootReducer = combineReducers({
    // combine các child Reducer 
    //key : value
    // userReducer : userReducer
    userReducer,
    BaiTapOanTuXiReducer,
    BaiTapDatVeReducer
})

export default rootReducer;