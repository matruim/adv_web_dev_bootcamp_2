const APIURL = '/api/todos/';

export async function getTodos(){
    return fetch(APIURL)
        .then(resp => {
            //handle the errors that may come up
            if(!resp.ok){
                if(resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data =>{
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                }else{
                    let err = {errorMessage: 'Please try again later, server is not responding'};
                    throw err;
                }
            }
            //return json data
            return resp.json();
        })
}

export async function createTodo(val){
    return fetch(APIURL, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({name: val})
    })
        .then(resp => {
            //handle the errors that may come up
            if(!resp.ok){
                if(resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data =>{
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                }else{
                    let err = {errorMessage: 'Please try again later, server is not responding'};
                    throw err;
                }
            }
            //return json data
            return resp.json();
        })
}

export async function removeTodo(id){
    const deleteUrl = APIURL + id;
    
    return fetch(deleteUrl, {method: 'delete'})
        .then(resp => {
            //handle the errors that may come up
            if(!resp.ok){
                if(resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data =>{
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                }else{
                    let err = {errorMessage: 'Please try again later, server is not responding'};
                    throw err;
                }
            }
            //return json data
            return resp.json();
        })
}

export async function updateTodo(todo){
    const updateURL = APIURL + todo._id;
    return fetch(updateURL, {
        method: 'put',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({completed: !todo.completed})
    })
    .then(resp => {
        //handle the errors that may come up
        if(!resp.ok){
            if(resp.status >= 400 && resp.status < 500){
                return resp.json().then(data =>{
                    let err = {errorMessage: data.message};
                    throw err;
                })
            }else{
                let err = {errorMessage: 'Please try again later, server is not responding'};
                throw err;
            }
        }
        //return json data
        return resp.json();
    })
}