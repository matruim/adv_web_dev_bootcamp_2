//need a reducer (rootReducer)
//need a redux store
//need a way to change state
const initialState = {
    todos:[],
    id:0
}

function rootReducer(state=initialState, action){
    const newState = {...state};
    
    switch(action.type){
        case "ADD_TODO":
            newState.id++;
            return {
                ...newState,
                todos:[...newState.todos, {task: action.task, id: newState.id}]
            };
        case "REMOVE_TODO":
            let todos = newState.todos.filter(todo => todo.id !== +action.id)
            return {...newState, todos};
        default:
            return newState;
    }
}

const store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

$(document).ready(function(){
    $("ul").on('click','button',function(event){
        store.dispatch({type:"REMOVE_TODO", id: $(event.target).attr("id")})
        $(event.target.parentElement).remove();
    });
    
    $("form").on("submit",function(event){
        event.preventDefault();
        let newTask = $('#task').val();
        store.dispatch({
            type:'ADD_TODO',
            task:newTask
        })
        let currentState = store.getState();
        let $newLi = $("<li>",{
            text:newTask
        });
        let $newButton = $("<button>",{
            text:"X",
            id: currentState.id
        });
        $newLi.append($newButton);
        $("#todos").append($newLi);
        $("form").trigger("reset");
    });
});
