const initState = {
    projects:[
        {id:'1',title:'help me find peach',content:'blablabla'},
        {id:'2',title:'collect all stars',content:'blablabla'},
        {id:'3',title:'egg hunt with yoshi',content:'blablabla'}
    ]
}

const projectReducer = (state = initState, action) => {
   switch(action.type){
       case 'CREATE_PROJECT':
            console.log('create project',action.project);
   }
    return state
}

export default projectReducer;