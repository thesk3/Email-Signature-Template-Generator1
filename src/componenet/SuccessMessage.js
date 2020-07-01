import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.paper,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

 function PositionedSnackbar({copySignature}) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ open: true, ...newState });
  };

  function handleClose() {
    setState({ ...state, open: false });
  }
  const classes = useStyles();
  return (
    <div>
     
      
      <Snackbar className={classes.body}
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={copySignature}
        onClose={handleClose}
        
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Copied!</span>}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  
    return {
        copySignature: state.copySignature
    }
    }
    
  export default connect(mapStateToProps)(PositionedSnackbar);
  