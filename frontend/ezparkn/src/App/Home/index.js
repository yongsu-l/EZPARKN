import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup } from 'react-bootstrap';
import { Message } from 'semantic-ui-react'
import './styled.css';
import Map from '../Map/Map';


export default class Home extends Component {

  render() {
    const messages = [
      'Friend A is leaving in 20 Minutes.',
      'Never Miss A Parking Spot At CCNY',
    ];

    const parkingSpots = [
      '139 ST: St Nicholas Ave',
      '136 ST: Amsterdam Ave',
    ]

    return (
      <div>
        <div className="text-center header">
          <h2><span>FIND PARKING WITH EZPARKN</span></h2>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 map">
        <Map />

        </div>

        {/* <div className="nav-container nav-container--sidebar">
        <div className="nav-sidebar-column" style={{padding: 0}}>
        
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content">

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 message">
            <h2 className="text-center">Important Messages</h2>
            <Message list={messages}/>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 parking">
            <h2 className="text-center">Current Parking Spots</h2>
            <a href="#"><Message list={parkingSpots}/></a>
          </div>
          </div>
        </div>
        </div> */}


      </div>
    );
  }
}


// //pop-dialog 

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'
// // import '../src/react-confirm-alert.css'
// import './styled.css';

// export default class Home extends Component {

//   submit = () => {
//     confirmAlert({
//       title: 'Confirm to submit',
//       message: 'Are you sure to do this.',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => alert('Click Yes')
//         },
//         {
//           label: 'No',
//           onClick: () => alert('Click No')
//         }
//       ]
//     })
//   }

//   submitCustomUI = () => {
//     confirmAlert({
//       customUI: ({ onClose }) => {
//         return (
//           <div className='custom-ui'>
//             <h1>Are you sure?</h1>
//             <p>You want to delete this file?</p>
//             <button onClick={onClose}>No</button>
//             <button onClick={onClose}>Yes, Delete it!</button>
//           </div>
//         )
//       }
//     })
//   }

//   render () {
//     return (
//       <div className='main-container'>
//         <section className='section1'>
//           <div className='center'>
//             <div className='title'>React confirm alert 2</div>
//             <br />
//             <br />
//             <a href='javascript:;' className='button' onClick={this.submit}>
//               Show confirm
//             </a>
//             <a
//               href='javascript:;'
//               className='button outline'
//               onClick={this.submitCustomUI}>
//               Show confirm Custom UI
//             </a>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }
