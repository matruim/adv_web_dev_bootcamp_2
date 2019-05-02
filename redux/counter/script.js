//need a reducer (rootReducer)
//need a redux store
//need a way to change state
const initialState = {
    count:0
}

function rootReducer(state=initialState, action){
    const newState = {...state};
    
    switch(action.type){
        case "INCREMENT":
            newState.count++;
            return newState;
        case "DECREMENT":
            newState.count--;
            return newState;
            
        default:
            return newState;
    }
}

const store = Redux.createStore(rootReducer);

$(document).ready(function(){
    $("#increment").on("click",function(){
        //dispatch some action to increment the count
        store.dispatch({
            type:"INCREMENT"
        });
        //update the browswer
        $("#counter").text(store.getState().count);
    });
    
    $("#decrement").on("click",function(){
        //dispatch some action to decrement the count
        store.dispatch({
            type:"DECREMENT"
        });
        //update the browswer
        $("#counter").text(store.getState().count);
    });
    
    //update the browswer
    $("#counter").text(store.getState().count);
});