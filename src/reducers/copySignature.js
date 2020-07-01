const copySignature  = (state =null, action) => {
    switch (action.type) {
     case 'COPY_SIGNATURE':
     return action.data
    
    default:
    return state;
    }
    }
    export default copySignature;