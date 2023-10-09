import { createSlice } from "@reduxjs/toolkit";
import { TCardItem } from "src/types";
import { getLocalStorage } from "src/utils";
//createSlice của reduxjs/toolkit, gom tổng hợp 3 folder action,constant,reduce

type TState = {
  listProduct: TCardItem[];
  listMenu: any;
  listTimKiem: any
};


const initialState: TState = {
  listProduct: [],
  listMenu: [],
  listTimKiem: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    // name + reducer: productSlice/setListProduct
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
    },

    setListMenu: (state, action) => {
      state.listMenu = action.payload;
    },
    setListTimKiem: (state, action) => {
      state.listTimKiem = action.payload;
    },
  },
});

// Bóc tách ra action creator của Redux
export const { setListProduct, setListMenu, setListTimKiem } = productSlice.actions;

//productSlice tạo ra hàm reducer, chấm đến để sử dụng reducer
export default productSlice.reducer;

