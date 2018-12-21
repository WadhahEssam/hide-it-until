import React, { Component } from 'react';
import anime from 'animejs';
import './App.css';

class App extends Component {

  componentDidMount() {

  var basicTimeline = anime.timeline();

  basicTimeline
    .add({
      targets: '#menu-box',
      duration: 700,
      // duration: 0,
      height: '100',
      borderRadius: '3',
      width: '90%',
      opacity: '1',
      easing: 'easeOutExpo',
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
      targets: '#menu-box',
      // duration: 500,
      duration: 200,
      border: '9px solid white',
      easing: 'easeOutExpo',
    })
    .add({
      targets: '#menu-box',
      // duration: 500,
      duration: 200,
      border: '0px solid white',
      easing: 'easeOutExpo',
    })
  }

  render() {
    return (
      <div className="App">
          <div id="menu-box" style={{backgroundColor: '#43484e', height: 20, width: 20, borderRadius: '100', margin: 10, opacity: 0, padding: 0, maxWidth: 500, display: 'flex' }} >
            <div id="menu-create-button" class="menu-button" style={{backgroundColor: '#EBEBEB', height: '0', width: '90%', borderRadius: '100', margin: 5, opacity: 1 }} />
            <div id="menu-metamask-button" class="menu-button" style={{backgroundColor: '#EBEBEB', height: '0', width: '90%', borderRadius: '100', margin: 5, marginRight: 0, marginLeft: 0, opacity: 1 }} />
            <div id="menu-info-button" class="menu-button" style={{backgroundColor: '#EBEBEB', height: '0', width: '90%', borderRadius: '100', margin: 5, opacity: 1 }} />
          </div>
      </div>
    );
  }
}

export default App;
