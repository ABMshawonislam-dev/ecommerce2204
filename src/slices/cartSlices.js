import { createSlice } from "@reduxjs/toolkit";

export const cartSlices = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addtocart: (state, action) => {


    if (state.cartItem.length > 0){
        let arr = []
            state.cartItem.map((item) => { 
            if (item.title == action.payload.title) {
                item.quantity = item.quantity + 1
                arr.push(item.title);
            }
        });

        if (arr.indexOf(action.payload.title) == -1) {
          state.cartItem.push(action.payload);
        }

    }else{

        state.cartItem.push(action.payload);
    }
   
      

    },
    increment:(state,action)=>{
  
      state.cartItem.map((item) => { 
        if (item.title == action.payload.title) {
            item.quantity = item.quantity + 1
            
        }
    });
    },
    decrement:(state,action)=>{
      
      state.cartItem.map((item) => { 
        if (item.title == action.payload.title) {
          if(item.quantity>1){

            item.quantity = item.quantity - 1
          }
            
        }
    });
    },
    removeFromCart:(state,action)=>{
      // console.log(action.payload)
      state.cartItem.map((item,index)=>{
      
        if(action.payload.title == item.title){
       
          state.cartItem.splice(index,1)
        }
      })
    }
  },
});



// Action creators are generated for each case reducer function
export const { addtocart,increment,decrement,removeFromCart } = cartSlices.actions;

export default cartSlices.reducer;
