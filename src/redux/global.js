import { createSlice, current } from "@reduxjs/toolkit";
import { electronics } from "../pages/home/data";

export const globalSlice = createSlice({
  name: "car",
  initialState: {
    allproducts: [],
    cart: [],
    singleproduct: {},
    categoryproducts: [],
    setimage: false,
    opencart: false,
    color: "",
    category: "ACCESSORIES", /// ACCESSORIES,FEATURED,FURNITURE

    // ---------------electronics-------

    electronicsproducts: [],
    electronicsFilter: [],
    electronicsCategory: "ACCESSORIES2", // ACCESSORIES2,FEATURED2,AUDIO

    // ----------section 3 tab----
    tab3: [],
    tabs3Filter: [],
    tabs3Category: "Featured3", //  SMARTWATCHES    MOBILE
  },
  reducers: {
    allproductsFetch: (state, action) => {
      state.allproducts = action.payload;
      //   console.log(state. allproducts);
    },

    // filyter products by category action and set the category in the state

    filterproducts: (state, action) => {
      //   state.category = action.payload;
      //   console.log("action.payload", action.payload, state.allproducts.length);

      const filter = state.allproducts.filter(
        (product) => product.category === action.payload
      );
      state.categoryproducts = filter;
    },

    changeCategory: (state, action) => {
      state.category = action.payload;
    },

    colorhandler: (state, action) => {
      state.color = action.payload;
    },

    electronicsFetch: (state, action) => {
      state.electronicsproducts = action.payload;
    },

    electronicsFilterFunc: (state, action) => {
      const filter = state.electronicsproducts.filter(
        (product) => product.category === action.payload
      );

      state.electronicsFilter = filter;
    },

    changeElectronicsCategory: (state, action) => {
      state.electronicsCategory = action.payload;
    },
    // -----------tab3---------

    tab3fetchAll: (state, action) => {
      state.tab3 = action.payload;
    },

    tab3FilterFunc: (state, action) => {
      const filter = state.tab3.filter(
        (product) => product.category === action.payload
      );

      state.tabs3Filter = filter;
    },

    tabs3CategoryChange: (state, action) => {
      state.tabs3Category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  allproductsFetch,

  tab3fetchAll,
  tab3FilterFunc,
  tabs3CategoryChange,

  changeElectronicsCategory,
  filterproducts,
  changeCategory,
  colorhandler,
  electronicsFetch,
  electronicsFilterFunc,
} = globalSlice.actions;

export default globalSlice.reducer;
