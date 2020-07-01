
const toggleReducer  = (state = {isToggleOn: false}, action) => {
    switch (action.type) {
     case 'TAB_TOGGLE':
     return action.data
    
    default:
    return state;
    }
    }
    export default toggleReducer;