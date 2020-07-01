import React, { Component } from 'react';
import "./Main.css";
import EmailSignatuer from './EmailSignatuer'
import ContainedButtons from "./Button";
import { connect } from 'react-redux';

class Main extends Component {

    constructor(props) {
        super(props);
       
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick() {
     
        this.props.dispatch({
  
            type: 'TAB_TOGGLE',
            data: !this.props.isToggleOn
          })
      }


    render() {
       
        return (
            <div className="Main">
                 <div className="main-content">
                <div className="topcomponent">
                <div className="tag">
                {this.props.isToggleOn ? (
                     <div  >
                     <div ><span >
                     </span></div><span onClick={this.handleClick}>&#8592;Back to The Editor</span></div>
       
      ) : (
        <label className="awsome"> AWSOMME
        </label> 
      )}
                 
                           
                    <label className="email-text">Email Signature Template Generator
                            </label>
                           
                </div>
                </div>
               <EmailSignatuer/>
               <ContainedButtons/>
                </div> 
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      isToggleOn: state.toggleTab.isToggleOn
    }
    }
    
  export default connect(mapStateToProps)(Main);
