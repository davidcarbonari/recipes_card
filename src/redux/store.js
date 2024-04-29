import { configureStore } from "@reduxjs/toolkit";
import { srcUrlReducer } from "./srcUrlSlice";
import { dataReducer } from "./dataSlice";
import { srcDataReducer } from "./srcDataSlice";
export default configureStore({
  reducer: {
    srcUrl: srcUrlReducer,
    putData: dataReducer,
    srcDataImput: srcDataReducer,
  },
});
