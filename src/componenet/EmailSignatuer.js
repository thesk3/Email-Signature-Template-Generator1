import React, { Component } from 'react';
import "./EmailSignatuer.css";
import { connect } from 'react-redux';
class EmailSignatuer extends Component {


  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
   // this.handleClick = this.handleClick.bind(this);
    this.copSignature = this.copSignature.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    
  }
  copSignature() {
    console.log("in emai body value to copy is-->",this.props.copy);
  }
  copyToClipboard() {
    var copyText = document.getElementById("myInput");

    /* Select the text field */
   
   
    /* Copy the text inside the text field */
    document.execCommand("copy");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    

   if(this.props.copy){


  var copyText = document.getElementById("myInput").innerHTML;
  var container = document.createElement('div')
  container.innerHTML = copyText

  // Hide element
  // [2]
  container.style.position = 'fixed'
  container.style.pointerEvents = 'none'
  container.style.opacity = 0

  // Detect all style sheets of the page
  var activeSheets = Array.prototype.slice.call(document.styleSheets)
    .filter(function (sheet) {
      return !sheet.disabled
    })

  // Mount the container to the DOM to make `contentWindow` available
  // [3]
  document.body.appendChild(container)

  // Copy to clipboard
  // [4]
  window.getSelection().removeAllRanges()

  var range = document.createRange()
  range.selectNode(container)
  window.getSelection().addRange(range)

  // [5.1]
  document.execCommand('copy')

  }
}

    render() {
        return (
            
                 <div className="email-signatuer" >
               
                 {/* {this.props.posts.map((post,i) => (
                    <div key={i}>
                     <div key={i}>{post.name}</div>
                    </div>
                  ))} */}
<div className="email-signatuerBody" >
   <div className="header" >
   <div className="round1 basic-round"></div>
   <div className="round2 basic-round"></div>
   <div className="round3 basic-round"></div>
   </div >
   <div className="header-body" >
   <span style={{    marginBottom: '7px'}}>To: <strong>Your Recipient</strong></span>
   <span >Subject: <strong>Check out my new Email Signature</strong></span>
   </div >
                <table >


                </table>

   <div>
   <div className="email-body">
   <div className="email-body-inner" id="myInput">

   <table className="first-table">
       <tbody className="table-body">
  <tr>
    <td style={{    verticalAlign: 'top'}}>
        <table>
            <tbody>
                <tr>
                    <td style={{textAlign: 'center'}}>
                    <img width="130" className="sc-gisBJw kDlVKO"
                     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/placeholder-image@2x.png" 
                     role="presentation" alt="1"style={{maxWidth: '128px', display:' block'}}/>
                    </td>
                </tr>
                <tr><td height="30"></td></tr>
                <tr><td className="sc-kjoXOD hpTAeq" style={{textAlign: 'center'}}>
                    <img width="130" className="sc-gisBJw kDlVKO" 
                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/logo-placeholder@2x.png"
                    alt="2" role="presentation" style={{maxWidth: '130px', display:' block'}}/>
                     </td>
                </tr>
                <tr><td height="30"></td></tr>
                <tr><td style={{    textAlign:'center'}}>
                <table style={{verticalAlign: '-webkit-baseline-middle',
    fontSize: 'medium',
    fontFamily: 'Arial',
    display: 'inline-block'}}>

<tbody>
<tr style={{    textAlign:'center'}}>

<td>
{this.props.signature.facebook===" " ? (
         <span></span>
      ) : (
        <a className="sc-Rmtcm gwGgYM" href="//" color="#6A78D1" 
    style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)'}}>
    <img height="24" className="sc-csuQGl CQhxV"
     src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook"
     color="#6A78D1" style={{backgroundColor: 'rgb(106, 120, 209)' ,maxWidth: '135px', display: 'block'}}/></a>
      )}
   
</td>
<td width="5"></td>
<td>
{this.props.signature.twitter===" " ? (
         <span></span>
      ) : (
        <a className="sc-Rmtcm gwGgYM" href="//" color="#6A78D1" 
        style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)'}}>
       <img height="24" className="sc-csuQGl CQhxV" 
       src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" 
       alt="twitter" color="#6A78D1" style={{backgroundColor:'rgb(106, 120, 209)' ,maxWidth: '135px',display: 'block'}}/>
    
       </a>
      )}
   
</td>
<td width="5"></td>
<td>
{this.props.signature.linkedin===" " ? (
         <span></span>
      ) : (
        <a className="sc-Rmtcm gwGgYM" href="//" color="#6A78D1" 
        style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)'}}>
        <img height="24" className="sc-csuQGl CQhxV"
         src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" 
         alt="linkedin" color="#6A78D1"style={{backgroundColor:'rgb(106, 120, 209)' ,maxWidth: '135px',display: 'block'}} />
    
        </a>
      )}
   
</td>
<td width="5"></td>
<td>
{this.props.signature.instagram===" " ? (
         <span></span>
      ) : (
        <a className="sc-Rmtcm gwGgYM" href="//" color="#6A78D1" 
        style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(106, 120, 209)'}}>
        <img height="24" className="sc-csuQGl CQhxV" src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram"
         color="#6A78D1" style={{backgroundColor: 'rgb(106, 120, 209)' ,maxWidth: '135px', display: 'block'}}/></a>
      )}
    
</td>
<td width="5"></td>
</tr>


</tbody>

    </table>
                    
                    </td></tr>
            </tbody>
        </table>
    </td>
    <td width="46"></td>
    <td style={{    padding:' 0px',verticalAlign: 'middle'}}>
        <h3 style={{margin: '0px',fontSize: '18px',color: 'rgb(0, 0, 0)'}}>
        <span>
            
        {this.props.signature.firstName===" " ? (
         <span>John</span>
      ) : (
        <span>{this.props.signature.firstName}</span>
      )}            
            </span>
        <span>&nbsp;</span>
        <span>{this.props.signature.lastName===" " ? (
         <span>Smith</span>
      ) : (
        <span>{this.props.signature.lastName}</span>
      )}  </span>
        </h3>
        <p className="sc-jhAzac hmXDXQ" color="#000000" fontSize="medium" 
        style={{margin: '0px', color: 'rgb(0, 0, 0)',fontSize: '14px',lineHeight:'22px'}}><span>{this.props.signature.jobTitle===" " ? (
            <span>Devolper</span>
         ) : (
           <span>{this.props.signature.jobTitle}</span>
         )}</span>
        </p>
        <p className="sc-fBuWsC eeihxG" color="#000000" fontSize="medium" 
        style={{margin: '0px', fontWeight: 500, color: 'rgb(0, 0, 0)', fontSize: '14px',lineHeight: '22px'}}>
            <span> {this.props.signature.department===" " ? (
         <span>Devolpment</span>
      ) : (
        <span>{this.props.signature.department}</span>
      )}   </span><span>&nbsp;|&nbsp;</span><span> {this.props.signature.companyName===" " ? (
        <span>Google</span>
     ) : (
       <span>{this.props.signature.companyName}</span>
     )}</span></p>

        <p className="sc-fMiknA bxZCMx" color="#000000" fontSize="medium" 
            style={{color:'rgb(0, 0, 0)', margin: '0px', fontSize: '14px', lineHeight: '22px'}}>
                <span>He / Him</span>
        </p>     
        <table className="sc-jAaTju fNCBho" cellPadding="0" cellSpacing="0"
         style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium',fontFamily: 'Arial', width: '100%'}}>
         <tbody><tr><td height="30"></td></tr><tr><td height="1" className="sc-bRBYWo ccSRck" color="#F2547D"
            direction="horizontal" 
            style={{width: '100%',borderBottom:'1px solid rgb(242, 84, 125)', borderLeft:'none', display: 'block'}}>
            </td></tr><tr><td height="30"></td></tr>
        </tbody>
        </table>

        <table style={{verticalAlign:' -webkit-baseline-middle',
    fontSize: 'medium',
    fontFamily: 'Arial'}}>
        <tbody>
              <tr height="25" style={{    verticalAlign:'middle'}}>
              <td width="30" style={{    verticalAlign:'middle'}}>
                  <table className="sc-jAaTju fNCBho" cellPadding="0" 
                  cellSpacing="0" style={{verticalAlign: '-webkit-baseline-middle',fontSize: 'medium',
                  fontFamily: 'Arial'}}><tbody><tr><td style={{verticalAlign: 'bottom'}}>
                      <span width="11" className="sc-gPEVay eQYmiW" color="#F2547D" 
                      style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}}><img width="12" 
                      className="sc-jDwBTQ dWtMUn" 
                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" 
                      alt="u878"color="#F2547D" style={{display: 'block',backgroundColor: 'rgb(242, 84, 125)'}}/>
              </span></td></tr></tbody></table>
              </td>  
              <td style={{padding: '0px',color: 'rgb(0, 0, 0)'}}><a className="sc-iRbamj blSEcj" href="tel:"
              color="#000000" style={{textDecoration: 'none',color: 'rgb(0, 0, 0)',fontSize: '12px'}}>
                  <span>{this.props.signature.officePhone===" " ? (
        <span>111 222 3333</span>
     ) : (
       <span>{this.props.signature.officePhone}</span>
     )}</span></a> | <a className="sc-iRbamj blSEcj" href="tel:" color="#000000" 
                  style={{textDecoration:'none', color:'rgb(0, 0, 0)', fontSize: '12px'}}><span>
                      
                      {this.props.signature.mobilePhone===" " ? (
        <span>111 222 3333</span>
     ) : (
       <span>{this.props.signature.mobilePhone}</span>
     )}   </span>
                  </a></td>
                  
                  
                  </tr>  

                  <tr height="25" style={{verticalAlign: 'middle'}}>
                      <td width="30" style={{verticalAlign: 'middle'}}>
                          <table className="sc-jAaTju fNCBho" cellPadding="0" cellSpacing="0" 
                          style={{verticalAlign:'-webkit-baseline-middle', fontSize: 'medium',fontFamily: 'Arial'}}>
                              <tbody><tr><td style={{verticalAlign: 'bottom'}}><span width="11"
                              className="sc-gPEVay eQYmiW" color="#F2547D" style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}}>
                                  <img width="12" className="sc-jDwBTQ dWtMUn" 
                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" 
                                 alt="8gh" color="#F2547D" style={{display: 'block',backgroundColor: 'rgb(242, 84, 125)'}}/></span>
                                  </td></tr>
                                  </tbody>
                                  </table></td>
                                  <td style={{padding: '0px'}}><a className="sc-iRbamj blSEcj" href="mailto:" color="#000000" 
                                  style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
                      <span> {this.props.signature.emailAddress===" " ? (
        <span>john@smith.com</span>
     ) : (
       <span>{this.props.signature.emailAddress}</span>
     )} </span></a></td></tr>





                      <tr height="25"  style={{verticalAlign: 'middle'}}><td width="30" style={{verticalAlign: 'middle'}}>
                          <table className="sc-jAaTju fNCBho" cellPadding="0" cellSpacing="0" 
                          style={{verticalAlign:'-webkit-baseline-middle', fontSize: 'medium',fontFamily: 'Arial'}}><tbody>
                              <tr><td style={{verticalAlign:'bottom'}}><span width="11" className="sc-gPEVay eQYmiW" color="#F2547D" 
                              style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}}><img width="12" className="sc-jDwBTQ dWtMUn" 
                              src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" 
                              alt="gfd" color="#F2547D" style={{display: 'block',backgroundColor: 'rgb(242, 84, 125)'}}/></span></td></tr></tbody>
                              </table></td><td style={{padding: '0px'}}><a className="sc-iRbamj blSEcj" href="//" color="#000000" 
                              style={{textDecoration: 'none', color: 'rgb(0, 0, 0)', fontSize: '12px'}}>
                          <span>{this.props.signature.website===" " ? (
        <span>www.Google.com</span>
     ) : (
       <span>{this.props.signature.website}</span>
     )}</span></a></td></tr>


                          <tr height="25" style={{verticalAlign: 'middle'}}><td width="30" style={{verticalAlign: 'middle'}}>
                              <table className="sc-jAaTju fNCBho" cellPadding="0" cellSpacing="0" 
                              style={{verticalAlign:'-webkit-baseline-middle', fontSize: 'medium',fontFamily: 'Arial'}}>
                                  <tbody><tr><td style={{verticalAlign:'bottom'}}><span width="11" className="sc-gPEVay eQYmiW"
                                   color="#F2547D"  style={{display: 'block', backgroundColor: 'rgb(242, 84, 125)'}}><img width="12" 
                                   className="sc-jDwBTQ dWtMUn"  alt="gf"
                                   src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" 
                                   color="#F2547D" style={{display: 'block',backgroundColor: 'rgb(242, 84, 125)'}}/></span></td></tr>
                                   </tbody></table></td><td  style={{padding: '0px'}}><span className="sc-jlyJG bbyJzT" color="#000000"
                           style={{fontSize: '12px', color: 'rgb(0, 0, 0)'}}><span>{this.props.signature.address===" " ? (
                            <span>line 1, line 2, line 3, line 4</span>
                         ) : (
                           <span>{this.props.signature.address}</span>
                         )}</span></span></td></tr>

        </tbody>

    </table>
       </td>
  </tr>
  
    
  </tbody>
</table>

       
   </div>

   </div>
   
</div>

</div>

</div>
            
        );
    }
}
const mapStateToProps = (state) => {
   
    return {
        signature: state.signatureData.signature,
        copy: state.copySignature
    }
    }
    
export default connect(mapStateToProps)(EmailSignatuer);