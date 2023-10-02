import { createSlice } from "@reduxjs/toolkit";
import { TCardItem } from "src/types";
import { getLocalStorage } from "src/utils";
//createSlice của reduxjs/toolkit, gom tổng hợp 3 folder action,constant,reduce

type TState = {
  listProduct: TCardItem[];
  gioHang: TCardItem[];

};

let dataLocal = getLocalStorage("localCarts");

const initialState: TState = {
  listProduct: [],
  gioHang :dataLocal
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    // name + reducer: productSlice/setListProduct
    setListProduct: (state, action) => {
  
      state.listProduct = action.payload;
      
    },
    setgioHang: (state, action) => {
      state.gioHang = action.payload;
    },

  },
});

// Bóc tách ra action creator của Redux
export const { setListProduct,setgioHang } = productSlice.actions;

//productSlice tạo ra hàm reducer, chấm đến để sử dụng reducer
export default productSlice.reducer;

