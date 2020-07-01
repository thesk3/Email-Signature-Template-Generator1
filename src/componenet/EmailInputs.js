import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


 function TextFields({ count, dispatch }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
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
    
  });

  const handleChange = name => async  event => {
    //console.log("index-->",event.target);
    //console.log("event.target.value-->",event.target.value);

    //setValues({ ...values, [name]: event.target.value });
   await setValues({
      ...values, [name]: event.target.value 
    }
    // , () => {
    //   console.log("New state in ASYNC callback:", values);
    // }
    
    );

    
     //console.log("values-->",values);
     dispatch({
  
        type: 'ADD_FIRST_NAME',
          data:values
      })
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="First Name"
       
        className={classes.textField}
        value={values.firstName.value}
        onChange={handleChange('firstName')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Last Name"
        className={classes.textField}
        value={values.lastName.value}
        onChange={handleChange('lastName')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="jobTitle"
        className={classes.textField}
        value={values.jobTitle.value}
        onChange={handleChange('jobTitle')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="companyName"
        className={classes.textField}
        value={values.companyName.value}
        onChange={handleChange('companyName')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="department"
        className={classes.textField}
        value={values.department.value}
        onChange={handleChange('department')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="phoneNumber"
        className={classes.textField}
        value={values.phoneNumber.value}
        onChange={handleChange('phoneNumber')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="officePhone"
        className={classes.textField}
        value={values.officePhone.value}
        onChange={handleChange('officePhone')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="mobilePhone"
        className={classes.textField}
        value={values.mobilePhone.value}
        onChange={handleChange('mobilePhone')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="website"
        className={classes.textField}
        value={values.website.value}
        onChange={handleChange('website')}
        margin="normal"
      />
       <TextField
        id="standard-name"
        label="emailAddress"
        className={classes.textField}
        value={values.emailAddress.value}
        onChange={handleChange('emailAddress')}
        margin="normal"
      />
       <TextField
        id="standard-name"
        label="linkedin"
        className={classes.textField}
        value={values.linkedin.value}
        onChange={handleChange('linkedin')}
        margin="normal"
      />
       <TextField
        id="standard-name"
        label="facebook"
        className={classes.textField}
        value={values.facebook.value}
        onChange={handleChange('facebook')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="twitter"
        className={classes.textField}
        value={values.twitter.value}
        onChange={handleChange('twitter')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="instagram"
        className={classes.textField}
        value={values.instagram.value}
        onChange={handleChange('instagram')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="customField"
        className={classes.textField}
        value={values.customField.value}
        onChange={handleChange('customField')}
        margin="normal"
      />
      
      
    </form>
  );
}

export default connect()(TextFields)