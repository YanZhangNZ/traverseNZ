

export const createProject = (project) => {
    //without thunk,we return an action
    // return{
    //     type:'ADD_PROJECT',
    //     project:project
    // }
    debugger;
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        //with thunk, we return a function, so we make async call to database
        debugger;
        const firestore = getFirestore();
        debugger;
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Yan',
            authorLastName:'Zhang',
            authorId:12345,
            createdAt:new Date()
        }).then(() => {
            debugger;
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
        
    }
};