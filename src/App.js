import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Main from './componenet/Main'
import Sidebar from './componenet/Sidebar'

function App({isToggleOn}) {
  return (
    <div className="App">
     
         <Sidebar  />
     
       <Main />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isToggleOn: state.toggleTab.isToggleOn
  }
  }
  
export default connect(mapStateToProps)(App);

