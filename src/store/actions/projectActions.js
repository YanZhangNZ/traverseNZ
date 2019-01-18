

export const createProject = (project) => {
    //without thunk,we return an action
    // return{
    //     type:'ADD_PROJECT',
    //     project:project
    // }

    return (dispatch,getState,{getFirebase,getFirestore}) => {
        //with thunk, we return a function, so we make async call to database
        dispatch({type:'CREATE_PROJECT',project})
    }
}