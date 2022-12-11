import { SET_HE_THONG_RAP } from "../constants/QuanLyRapConstant";

const initialState = {
  heThongRapChieu: [],
};

export const QuanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP: {
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
    }

    default:
      return state;
  }
};
