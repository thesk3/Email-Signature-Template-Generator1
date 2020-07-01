
 const data={signature: {
    firstName: " ",
    lastName: " ",
    jobTitle:" ",
    companyName:" ",  
    department:" ",
    phoneNumber: " ",
    officePhone: " ",  
    mobilePhone:" ",
    website:" ",
    emailAddress: " ", 
    linkedin: " ",
    facebook: " ",
    twitter: " ",
    instagram:" ",
    customField:  " ",
    address: " ",
    submitted: false
  }
 }
const postReducer  = (state = data, action) => {
    switch (action.type) {
    // case 'ADD_FIRST_NAME':
    //     console.log("action-->",action.data);
    // return {
    //     ...state,
    //     signature:{
    //         ...state.signature,
           
    //         firstName:{
    //             text: action.data.name,
    //             valid: null
    //         }
           
          
    //     }
    // }
    case 'ADD_FIRST_NAME':
       
        const { firstName, lastName,jobTitle,companyName,department,phoneNumber
         ,officePhone,mobilePhone,website,emailAddress,linkedin,
         facebook,
         twitter,
         instagram,
         customField,
         address
        
        
        } = action.data;
        
        const val="signature";
       
        return {
            ...state,
            [val]: {
             
             
                
                firstName: firstName,
                lastName: lastName,
                jobTitle:jobTitle,
                companyName,department,phoneNumber
         ,officePhone,mobilePhone,website,emailAddress,linkedin,
         facebook,
         twitter,
         instagram,
         customField,
         address
             
            }
          };
    // case 'DELETE_POST':
    // return state.filter((post) => post.id !== action.id)
    // case 'EDIT_POST':
    // return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
    // case 'UPDATE':
    // return state.map((post) => {
    // if (post.id === action.id) {
    // return {
    // ...post,
    // title: action.data.newTitle,
    // message: action.data.newMessage,
    // editing: !post.editing
    // }
    // } else return post;
    // })
    default:
    return state;
    }
    }
    export default postReducer;