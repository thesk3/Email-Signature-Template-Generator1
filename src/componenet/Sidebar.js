import React, { Component } from 'react';
import "./Sidebar.css";
import FullWidthTabs from './Tab'
import { connect } from 'react-redux';
class Sidebar extends Component {
    render() {
        let Sidebar="";
       /// this.props.isToggleOn?'Sidebar-hide':'Sidebar'
        if (!this.props.isToggleOn) {
            Sidebar='Sidebar';
        }
         if (this.props.isToggleOn) {
            Sidebar='Sidebar-hide';
         }
        //var Sidebar = 'Sidebar';
        // if (this.props.isToggleOn) {
        //     Sidebar += '-hide';
        // }

        
        return (
            
            <div className={Sidebar}  >
               
                <FullWidthTabs/>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state in sidebar",state);
    return {
      isToggleOn: state.toggleTab.isToggleOn
    }
    }
    
  export default connect(mapStateToProps)(Sidebar);
  