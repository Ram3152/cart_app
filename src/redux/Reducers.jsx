import { createReducer,createAction } from "@reduxjs/toolkit";

const addToCart=createAction('addToCart');
const decrement=createAction('decrement');
const deleteFromCart=createAction('deleteFromCart');
const calculatePrice=createAction('calculatePrice');



export const cartReducer=createReducer({cartItem:[],
subTotal:0,
shipping:0,
tax:0,
total:0,
},(builder)=>{ builder
.addCase(addToCart,(state,action)=>{
    const item=action.payload;
    const isItemExist =state.cartItem.find((i)=>i.id=== item.id);
    if(isItemExist){
        state.cartItem.forEach((i)=>{
            if(i.id === item.id) i.quantity+=1;
        })
    }
    else{
        state.cartItem.push(item);
    }
})
.addCase(decrement,(state,action)=>{
    const item =state.cartItem.find((i)=>i.id=== action.payload);
    if(item.quantity > 1){
        state.cartItem.forEach((i)=>{
            if(i.id===item.id) i.quantity -= 1;
        })
    }
})
.addCase(deleteFromCart,(state,action)=>{
    state.cartItem=state.cartItem.filter((i)=>i.id !== action.payload);
})
.addCase(calculatePrice, (state)=>{
    let sum =0;
    state.cartItem.forEach((i)=> (sum+= i.price * i.quantity));
    state.subTotal=sum;
    state.shipping=state.subTotal >500? 0 : 200;
    state.tax=+(state.subTotal *0.18).toFixed();
    state.total=state.subTotal+state.tax+state.shipping;
})
})