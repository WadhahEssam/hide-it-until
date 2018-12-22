import React, { Component } from 'react';
import anime from 'animejs';
import './App.css';
import logo from './logo.svg';

class App extends Component {

  componentDidMount() {

  var basicTimeline = anime.timeline();

  // animating the logo
  anime({
    delay: 1500,
    targets: '#logo',
    opacity: 1,
    easing: 'easeInOutSine',
    duration: 1500,
  });

  basicTimeline
    .add({
      delay: 150,
      targets: '#menu-box',
      duration: 700,
      // duration: 0,
      height: '100',
      borderRadius: '3',
      width: '95%',
      opacity: '1',
      easing: 'easeOutCirc'
      // loop: true
    })
    .add({
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
      duration: 700,
      // duration: 0,
      height: '500',
      borderRadius: '3',
      width: '95%',
      opacity: '1',
      easing: 'easeOutCirc'
      // loop: true
    })
    .add({
      targets: '#menu-box ,#body-box',
      // duration: 500,
      duration: 400,
      border: '#9c9c9c',
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

          <div id="logo" style={{opacity: 0}}> 
            <img src={logo} className="logo" alt="logo" height="80"/>
          </div>

          <div id="menu-box" style={{backgroundColor: '#43484e', height: 20, width: 20, borderRadius: '100', margin: 10, opacity: 0, padding: 0, maxWidth: 500, display: 'flex' }}>
            <div id="menu-create-button" className="menu-button" style={{backgroundColor: '#EBEBEB', height: '0', width: '90%', borderRadius: '100', margin: 5, opacity: 1 }} />
            <div id="menu-metamask-button" className="menu-button" style={{backgroundColor: '#EBEBEB', height: '0', width: '90%', borderRadius: '100', margin: 5, marginRight: 0, marginLeft: 0, opacity: 1 }} />
            <div id="menu-info-button" className="menu-button" style={{backgroundColor: '#EBEBEB', height: '0', width: '90%', borderRadius: '100', margin: 5, opacity: 1 }} />
          </div>
          <div id="body-box" style={{backgroundColor: '#43484e', height: 20, width: '90%', borderRadius: '100', margin: 10, marginTop: 2, opacity: 0, padding: 0, maxWidth: 500, display: 'flex' }}>

          </div>
      </div>
    );
  }
}

export default App;
