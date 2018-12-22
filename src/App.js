import React, { Component } from 'react';
import anime from 'animejs';
import './App.css';
import logo from './logo.svg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import metamaskIcon from './metamask.png';
import infoIcon from './info.png';
import mainmenuIcon from './main.png';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
  }

  state = {
    startDate: new Date()
  };

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  componentDidMount() {

  var basicTimeline = anime.timeline();
  var motionDiv = anime.timeline();



  // animating the logo
  anime({
    delay: 1500,
    targets: '#logo',
    opacity: 1,
    easing: 'easeInOutSine',
    duration: 1500,
  });

  anime({
    delay: 150,
    targets: '#menu-box',
    duration: 700,
    // duration: 0,
    borderRadius: '3',
    width: '95%',
    height: '100',
    opacity: '1',
    easing: 'easeOutExpo',
    // loop: true
  });

  basicTimeline
    .add({
      delay: 500,
      targets: '.menu-button',
      duration: 300, 
      // duration: 0,
      height: '90%',
      borderRadius: '3',
      width: '90%',
      opacity: '1',
      easing: 'easeOutExpo',
    })
    .add({
      targets: '#body-box',
      duration: 400,
      // duration: 0,
      height: '500',
      borderRadius: '3',
      width: '95%',
      opacity: '1',
      easing: 'easeOutCirc'
      // loop: true
    })
    .add({
      targets: '.main-textarea ,.main-datepicker, #send-button, .material-menu-button',
      // duration: 500,
      duration: 400,
      opacity: 1,
      easing: 'easeOutExpo',
    })
    .add({
      targets: '#menu-box ,#body-box',
      // duration: 500,
      duration: 400,
      border: '0px solid #9c9c9c',
      easing: 'easeOutExpo',
    })
    .add({
      targets: '#menu-box ,#body-box',
      // duration: 500,
      duration: 400,
      border: '0px solid white',
      easing: 'easeOutExpo',
    })
  }

  render() {
    return (
      <div className="App">

          {/* <div id="logo" style={{opacity: 0}}> 
            <img src={logo} className="logo" alt="logo" height="50"/>
          </div> */}

          <div id="menu-box" style={{backgroundColor: '#43484e', height: 20, width: 0, borderRadius: '100', margin: 10, opacity: 0, padding: 0, maxWidth: 500, display: 'flex' }}>
            <div id="menu-create-button" className="menu-button" style={{backgroundColor: 'white', height: '0', width: '90%', borderRadius: '100', margin: 5, opacity: 0 }} >
              <Tooltip title="Main" placement="top">
                <Button id="create-button" className="material-menu-button" variant="contained" href="#contained-buttons" style={{ backgroundColor:'#DCDCDC', color: 'black', width: '100%', height: '100%', fontSize: 12, opacity: 1, zIndex: 2}}>
                  <img src={mainmenuIcon} height="60"/>
                </Button>
              </Tooltip>
            </div>
            <div id="menu-metamask-button" className="menu-button" style={{backgroundColor: 'white', height: '0', width: '90%', borderRadius: '100', margin: 5, marginRight: 0, marginLeft: 0, opacity: 0 }}>
              <Tooltip title="Use Metamask" placement="top">
                <Button id="via-metamask-button" className="material-menu-button" variant="contained" href="#contained-buttons" style={{ backgroundColor:'#DCDCDC', color: 'black', width: '100%', height: '100%', fontSize: 12, opacity: 1, zIndex: 2}}>
                  <img src={metamaskIcon} height="50" style={{top: 3}}/>
                </Button>
              </Tooltip>
            </div>
            <div id="menu-info-button" className="menu-button" style={{backgroundColor: 'white', height: '0', width: '90%', borderRadius: '100', margin: 5, opacity: 0 }}>
              <Tooltip title="@About" placement="top">
                <Button id="info-button" className="material-menu-button"  variant="contained" href="#contained-buttons" style={{ backgroundColor:'#DCDCDC', color: 'black', width: '100%', height: '100%', fontSize: 12, opacity: 1, zIndex: 2}}>
                  <img src={infoIcon} height="60"/>
                </Button>
              </Tooltip>
            </div>
          </div>
          <div id="body-box" style={{backgroundColor: '#43484e', height: 20, width: '90%', borderRadius: '100', margin: 10, marginTop: 2, opacity: 0, padding: 0, maxWidth: 500, display: 'flex', position: 'relative' }}>
            <textarea className="main-textarea">

            </textarea>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
                className="main-datepicker"
            />
            <Button id="send-button" variant="contained" href="#contained-buttons" style={{marginTop: 13, backgroundColor:'#608e60', color: 'white', width: 150, height: 50, fontSize: 20, opacity: 0}}>
              SEND
            </Button>
          </div>
      </div>
    );
  }
}

export default App;
