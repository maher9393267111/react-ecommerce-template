import { createSlice, current } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "car",
  initialState: {
    allproducts: [],
    cart: [],
    singleproduct: {},
    categoryproducts: [],
    setimage: false,
    opencart: false,
    color:'',
    category: "ACCESSORIES", /// ACCESSORIES,FEATURED,FURNITURE
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

    
        const filter = state.allproducts.filter(product => product.category === action.payload)
        state.categoryproducts = filter
      
     

      
    },


changeCategory: (state, action) => {

    state.category = action.payload;


},


colorhandler: (state, action) => {

    state.color = action.payload;

},




  },
});

// Action creators are generated for each case reducer function
export const { allproductsFetch, filterproducts,changeCategory,colorhandler } = globalSlice.actions;

export default globalSlice.reducer;
