import { quanLyRapService } from "../../services/QuanLyRapService";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP,
} from "../constants/QuanLyRapConstant";

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      console.log("result", result.data.content);

      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP,
          heThongRapChieu: result.data.content,
        });
      }
    } catch (errors) {
      console.log("error", errors);
    }
  };
};
