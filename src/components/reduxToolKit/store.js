import {createSlice,configureStore}  from '@reduxjs/toolkit';


const initialState ={counter: 0, showCounter:true};

const counterSlice = createSlice({
    name : 'counter',
    //initialState : initialState,
    initialState,
    reducers: {
        /**Here each method will take default state, action object */
        increment(state) {
            // Create new state object and make cop and work on it, keep all state value and 
            //chnage as per our change , internall calls emer package 
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action){
            state.counter= state.counter+ action.amount;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        } 
    }
})

export const store = configureStore({
  reducer : counterSlice.reducer
});


export const counterActions =  counterSlice.actions;

//export default store;


